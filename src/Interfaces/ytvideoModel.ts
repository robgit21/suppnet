export interface ytvideoModel {
  youTubeVideoLink: string;
  videoTitle: string;
  creditsToPay: number;
  supportedTimes: number;
  thumbnailImage: string;
  isShort: boolean;
  isVisible: boolean;
  getCreditsForVideo: number;
  videoSupportCode?: string;
  userProfileId: string;
  userProfile: any;
  userProfile_YTVideo_Supports: any;
  id: string;
  created: string;
  lastUpdated: string;
  channelName: string;
  channelImageUrl: string;
}
