import { useState } from 'react';
import {
  Box,
  Container,
  Flex,
  SimpleGrid,
  Heading,
  Text,
  VStack,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  HStack,
  Select,
  IconButton,
} from '@chakra-ui/react';
import { FilterDrawer } from './FilterDrawer';
import Sidebar from './Sidebar';
import Pagination from './Pagination';
import AlbumCard from './AlbumCard';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';

const MarketplaceResults = () => {
  const albums = [
    {
      title: 'Discovery',
      artist: 'Daft Punk',
      releaseYear: 2001,
      image: 'https://i.discogs.com/6gMPje3DUKa1LMojsHtGTE5o4fIQon5lYaIJvALlvVM/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Nzkt/MTIzNjAzNTQ3Mi5q/cGVn.jpeg',
    },
    {
      title: 'Random Access Memories',
      artist: 'Daft Punk',
      releaseYear: 2013,
      image: 'https://i.discogs.com/zFVZE4s0zSXUIM7OMl2UDckSq0zlopdHBHRz23zqMJk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTUzOTI5NTA5/Mi02MDg3LnBuZw.jpeg',
    },
    {
      title: 'Homework',
      artist: 'Daft Punk',
      releaseYear: 1997,
      image: 'https://i.discogs.com/Tgzu71VlahJ9X8cu0eaqutNNlPWJOqelug4Czwwa6BM/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDc2/NTUtMTY3MDAwMjM2/NC01MjE4LmpwZWc.jpeg',
    },
    {
      title: 'Human After All',
      artist: 'Daft Punk',
      releaseYear: 2005,
      image: 'https://i.discogs.com/FEWXTwkcL0-QDeeH_uXA7HwRqjXBujz-6Mic0gx6Ds8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY4/Ni0xMzQ3NTc0NzU3/LTgwNDguanBlZw.jpeg',
    }
  ];

  const [filters, setFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 5;

  const handleFilterChange = (selectedFilters: string[]) => {
    setFilters(selectedFilters);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <Box w="full">
      <VStack spacing={6} align="stretch">
        <HStack justify="space-between" wrap="wrap" spacing={4}>
          <Heading size="lg">Reviews & Ratings</Heading>
          <HStack spacing={2}>
            <Select
              size="sm"
              w="200px"
              placeholder="Sort by"
              variant="filled"
              bg="gray.50"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating">Highest Rating</option>
            </Select>
            <FilterDrawer />
          </HStack>
        </HStack>

        <Flex gap={8}>
          <Box display={{ base: 'none', md: 'block' }} minW="250px">
            <Sidebar onFilterChange={handleFilterChange} />
          </Box>

          <VStack flex="1" spacing={6} align="stretch">
            <SimpleGrid
              columns={{ base: 1, sm: 2, lg: 3 }}
              spacing={6}
              w="full"
            >
              {albums.map((album, index) => (
                <AlbumCard key={index} {...album} />
              ))}
            </SimpleGrid>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default MarketplaceResults;