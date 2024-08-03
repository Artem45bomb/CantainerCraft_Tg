import { RemoteTrackPublication } from "livekit-client";

export type TrackInfo = {
  trackPublication: RemoteTrackPublication;
  participantIdentity: string;
};
