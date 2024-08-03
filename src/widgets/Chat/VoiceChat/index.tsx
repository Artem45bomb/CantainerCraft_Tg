"use client";
import {
  Dispatch,
  FC,
  memo,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { userStore } from "@/features/store/user";
import { Panel } from "@/widgets/Chat/VoiceChat/Panel";
import { Settings, UserInChat } from "@/features/types/voiceChat";
import { motion } from "framer-motion";
import { TrackInfo } from "@/entities";
import { Client } from "@stomp/stompjs";
import { UserRoomDTO } from "@/features/api/dto/UserRoomDTO";
import { chatStore } from "@/features/store/chat";
import { roomStore } from "@/features/store/room";
import VideoComponent from "./UserStream/VideoComponent";
import AudioComponent from "./UserStream/AudioComponent";
import {
  LocalVideoTrack,
  RemoteParticipant,
  RemoteTrack,
  RemoteTrackPublication,
  Room,
  RoomEvent,
} from "livekit-client";
import { getToken } from "@/features/api/room/room.token";

interface IVoiceChat {
  activeVoiceChat: boolean;
  setActiveVoiceChat: Dispatch<SetStateAction<boolean>>;
}

const variants: Record<string, unknown> = {
  hidden: {
    left: 0,
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 60,
      damping: 10,
    },
  },
  show: {
    left: "-25vw",
    transition: {
      type: "spring",
      duration: 0.4,
      stiffness: 60,
      damping: 10,
    },
  },
};

const VoiceChat: FC<IVoiceChat> = memo(
  ({ setActiveVoiceChat, activeVoiceChat }) => {
    const { userAuth } = userStore();
    const { chatIn } = chatStore();
    const [isShow, setIsShow] = useState(true);
    const { room, addUser, deleteUser, init } = roomStore();
    const socket = useRef<Client>();
    const [roomConnect, setRoom] = useState<Room>();
    const [remoteTracks, setRemoteTracks] = useState<TrackInfo[]>([]);
    const [remoteTracksWait, setRemoteTracksWait] = useState<TrackInfo[]>([]);
    const [localTrack, setLocalTrack] = useState<LocalVideoTrack>();

    const [settings, setSettings] = useState<Settings>({
      Voice: false,
      Screen: false,
      Micro: true,
      Telephone: false,
    });

    const usersInVoiceChat: UserInChat[] = [
      { user: userAuth, settings: settings },
    ];
    //room

    // async function joinRoom() {
    //     // Initialize a new Room object
    //     const room = new Room();
    //     setRoom(room);

    //     // Specify the actions when events take place in the room
    //     // On every new Track received...
    //     room.on(
    //         RoomEvent.TrackSubscribed,
    //         (_track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {

    //             setRemoteTracks((prev) => [
    //                 ...prev,
    //                 { trackPublication: publication, participantIdentity: participant.identity }
    //             ]);
    //         }
    //     );

    //     // On every Track destroyed...
    //     room.on(RoomEvent.TrackUnsubscribed, (_track: RemoteTrack, publication: RemoteTrackPublication) => {

    //         setRemoteTracks((prev) => prev.filter((track) => track.trackPublication.trackSid !== publication.trackSid));
    //     });

    //     try {
    //         // Get a token from your application server with the room name and participant name
    //         const token = await getToken("ter8", ""+Math.floor(Math.random() * 2000) + 1);

    //         // Connect to the room with the LiveKit URL and the token
    //         await room.connect("ws://localhost:7880/", token);

    //         // Publish your camera and microphone
    //         await room.localParticipant.enableCameraAndMicrophone();
    //         setLocalTrack(room.localParticipant.videoTrackPublications.values().next().value.videoTrack);
    //     } catch (error) {
    //         console.log("There was an error connecting to the room:", (error as Error).message);
    //         await leaveRoom();
    //     }
    // }

    //   useEffect(() => {
    //     console.log('connect')
    //     joinRoom();
    //   })

    //videochat
    // useEffect(() => {
    //   if (socket.current && socket.current?.connected) {
    //     socket.current.subscribe("/topic/room/connect", (message) => {
    //       const userDTO: UserRoomDTO = JSON.parse(message.body);
    //       if (userDTO.roomId === chatIn.uuid) {
    //         addUser(userDTO.user);
    //       }
    //     });
    //     socket.current.subscribe("/topic/room/disconnect", (message) => {
    //       const userDTO: UserRoomDTO = JSON.parse(message.body);
    //       console.log("rd");
    //       if (userDTO.roomId === chatIn.uuid) {
    //         deleteUser(userDTO.user);
    //         setRemoteTracks((prev) =>
    //           prev.filter((e) => +e.participantIdentity !== userDTO.user.id),
    //         );
    //       }
    //     });
    //   }
    // });

    // useEffect(() => {
    //   if (room) {
    //     for (const { user } of room.users) {
    //       const isAdmin = user.roles.some((e) => e.name === "Admin");
    //       const findTracks = remoteTracksWait.filter(
    //         (e) => +e.participantIdentity === user.id,
    //       );
    //       if (!isAdmin && findTracks.length > 0) {
    //         setRemoteTracks((prev) => [...prev, ...findTracks]);
    //         setRemoteTracksWait(
    //           remoteTracksWait.filter((e) => +e.participantIdentity !== user.id),
    //         );
    //       } else if (isAdmin && findTracks.length > 0) {
    //         setRemoteTracksWait(
    //           remoteTracksWait.filter((e) => +e.participantIdentity !== user.id),
    //         );
    //       }
    //     }
    //   }
    // }, [room, remoteTracksWait]);
    console.log(1);
    // useEffect(() => {
    //   if (socket.current) {
    //     socket.current.deactivate();
    //   }
    //   socket.current = new Client({ brokerURL: "ws://localhost:8080/websocket" });
    //   socket.current!.activate();
    //   init({
    //     id: "",
    //     roomId: chatIn.uuid,
    //     users: [],
    //   });
    // }, []);
    //end

    const streamOff = () => {
      setSettings({
        Voice: false,
        Screen: false,
        Micro: false,
        Telephone: false,
      });
      setActiveVoiceChat((prev) => !prev);
    };

    async function leaveRoom() {
      // Leave the room by calling 'disconnect' method over the Room object
      await roomConnect?.disconnect();

      // Reset the state
      setRoom(undefined);
      setLocalTrack(undefined);
      setRemoteTracks([]);
    }

    return (
      <motion.div
        initial={"show"}
        animate={isShow ? "show" : "hidden"}
        className="flex h-full  relative w-full"
      >
        <motion.div
          variants={variants}
          className={"transition-all w-1/4-vw h-full absolute top-0"}
        >
          <Panel stopStream={streamOff} usersInChat={usersInVoiceChat} />
        </motion.div>
        <div className="flex flex-col h-full w-full bg-1D4846 relative">
          {localTrack !== undefined && (
            <VideoComponent
              track={localTrack}
              participantIdentity={"" + userAuth.id}
              local={true}
            />
          )}

          {/* {remoteTracks.map((remoteTrack) =>
                remoteTrack.trackPublication.kind === "video" ? (
                    <VideoComponent
                        key={remoteTrack.trackPublication.trackSid}
                        track={remoteTrack.trackPublication.videoTrack!}
                        participantIdentity={remoteTrack.participantIdentity}
                    />
                ) : (
                    <AudioComponent
                        key={remoteTrack.trackPublication.trackSid}
                        track={remoteTrack.trackPublication.audioTrack!}
                    />
                )
            )} */}
        </div>
      </motion.div>
    );
  },
);

export default VoiceChat;
