export interface IPersonalInfo {
  name: string;
  position: ITranslation<string>;
  email: string;
  phone?: number;
  address?: ITranslation<string>;
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
export interface ITranslation<T> {
  en: T;
  es: T;
}
export interface IProject {
  img: string;
  title: string;
  description: string;
  link: string;
}
