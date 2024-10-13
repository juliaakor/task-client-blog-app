export enum AvailableSocials {
  Facebook = 'facebook',
  Instagram = 'instagram',
  Linkedin = 'linkedin',
  Twitter = 'twitter',
}

export type AvailableSocialsUnion = `${AvailableSocials}`;

export interface SocialsProps {
  isIncluded: AvailableSocialsUnion[];
  className?: string;
  iconStyle?: string;
  links?: Partial<Record<AvailableSocialsUnion, string>>;
}
