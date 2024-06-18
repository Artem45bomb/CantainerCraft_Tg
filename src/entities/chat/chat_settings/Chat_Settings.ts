import { Chat_Settings_Channel, Chat_Settings_Group } from ".";

export type Chat_Settings = {
  uuid: string;
  isAllowTheme: boolean;
  chatSettingsGroup: Chat_Settings_Group;
  chatSettingsChannel: Chat_Settings_Channel;
};
