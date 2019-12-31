import { createContext } from 'react';

export type SizeType = 'small' | 'default' | 'large';

export interface sizeContextProps {
  size?: SizeType;
}

const SizeContext = createContext<sizeContextProps>({});

export default SizeContext;
