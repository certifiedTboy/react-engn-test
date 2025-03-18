export interface AppIconProps {
  value: { color: string; size: string };
  children: React.ReactNode;
}

export interface DropDownOptionProps {
  name: string;
}

export interface SEOData {
  title?: string;
  metaDescription?: string;
}

export interface MessageDrawerProps {
  overlayColor?: string;
  width?: number;
  data?: { title: string; description: string; message: string }[];
}
