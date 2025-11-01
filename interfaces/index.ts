

// Props for Button component
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export interface PropertyProps {
  id: string,
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

export interface HeaderProps {
  accommodationTypes: string[];
}
export interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export interface review {
  id: number;
  author: string;
  rating: number;
  comment: string;
  date: string;
}