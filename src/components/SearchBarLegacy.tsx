// src/components/SearchBar.tsx
import {
  Box,
  Input,
  Button,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import { useState } from 'react';

type SearchBarProps = {
  onSearch: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Box w="full" maxW="md" mx="auto" my={4}>
      <InputGroup>
        <Input
          placeholder="Search albums, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          size="md"
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            colorScheme="teal"
            onClick={handleSearch}
          >
            Search
          </Button>
        </InputRightElement>
      </InputGroup>
    </Box>
  );
};

export default SearchBar;
