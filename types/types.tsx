export interface IPersonalInfo {
  name: string;
  position: string;
  email: string;
  phone?: number;
  address?: string;
  nationality: string;
  birthday?: string;
  profileImg: string;
  socialMedia: { icon: string; link: string }[];
}

export interface ISkill {
  skill: string;
  percent: number;
}
export interface IExperince {
  position: string;
  place: string;
  beginDate: string;
  endDate: string;
  description: string;
  link?: string;
}

export interface IProject {
  img: string;
  title: string;
  description: string;
  link: string;
}
