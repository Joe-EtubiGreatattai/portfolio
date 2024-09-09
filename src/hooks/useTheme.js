import { useEffect } from 'react';
import { useColorMode } from '@chakra-ui/react';

const useTheme = () => {
  const { colorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setColorMode(storedTheme);
    }
  }, [setColorMode]);

  useEffect(() => {
    localStorage.setItem('theme', colorMode);
  }, [colorMode]);
};

export default useTheme;
