import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  useColorModeValue,
  Tag,
  Wrap,
  WrapItem,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Play, Heart, Share2, UserPlus } from 'lucide-react';
import { ArtistHeroProps } from './types';

export const ArtistHero = ({
  name,
  image,
  coverImage,
  monthlyListeners,
  genres = [],
  description,
  isVerified = false,
  isCompact = false,
  onPlay,
  onFollow,
  onShare,
}: ArtistHeroProps) => {
  const bgOverlay = useColorModeValue(
    'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))'
  );

  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box position="relative" width="full" overflow="hidden">
      {/* Content */}
      <Container maxW="container.full" position="relative" zIndex={1} px="0">
        <HStack
          spacing={6}
          align="start"
          px={0}
          paddingBottom="8"
          flexDirection={{ base: 'column', md: 'row' }}
          width="100%"
          transition="all 0.3s ease-in-out"
        >
          {/* Artist Image */}
          <Box
            borderBottomRightRadius="48px"
            overflow="hidden"
            boxShadow="xl"
            width={{ base: '100%', md: isCompact ? '30%' : '50%' }}
            mb={{ base: 4, md: 0 }}
            transition="all 0.3s ease-in-out"
          >
            <AspectRatio ratio={{ base: 4 / 3, md: 1 }}>
              <Image
                src={image}
                alt={name}
                width="100%"
                height="100%"
                objectFit="cover"
                transition="all 0.3s ease-in-out"
              />
            </AspectRatio>
          </Box>

          {/* Artist Info */}
          <VStack
            align="start"
            spacing={4}
            width={{ base: '100%', md: isCompact ? '70%' : '50%' }}
            py={{ base: 1, md: isCompact ? 4 : 8, lg: isCompact ? 8 : 16 }}
            paddingRight={{ base: 6, md: 12 }}
            paddingLeft={{ base: 6, md: 0 }}
            transition="all 0.3s ease-in-out"
          >
            <HStack verticalAlign="middle">
              <Heading 
                as="h1" 
                size={isCompact ? "xl" : "2xl"} 
                color={textColor} 
                fontWeight="bold"
                transition="all 0.3s ease-in-out"
              >
                {name}
              </Heading>
              {isVerified && (
                <Tag size="sm" colorScheme="yellow" verticalAlign="middle">
                  [a1289]
                </Tag>
              )}
            </HStack>

            {/* Genres Badges */}
            <Wrap spacing={2}>
              {genres.map((genre) => (
                <WrapItem key={genre}>
                  <Tag size="sm" variant="subtle" colorScheme="gray">
                    {genre}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>

            {/* Accordion for additional info */}
            <Accordion 
              defaultIndex={isCompact ? [] : [0]} 
              allowMultiple 
              width="100%"
            >
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Profile
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  <Text
                    color={subTextColor}
                    fontSize="sm"
                    maxWidth="800px"
                    lineHeight="tall"
                    noOfLines={isCompact ? 3 : undefined}
                  >
                    {description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Sites
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  <Text
                    color={subTextColor}
                    fontSize="sm"
                    maxWidth="800px"
                    lineHeight="tall"
                  >
                    Wikipedia, Imdb, Lastfm, and other links
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* Action Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                leftIcon={<Play size={20} />}
                colorScheme="brand"
                size={isCompact ? "sm" : "md"}
                onClick={onPlay}
                aria-label="Play artist's popular tracks"
              >
                Play
              </Button>
              <Button
                leftIcon={<UserPlus size={20} />}
                variant="outline"
                colorScheme="brand"
                size={isCompact ? "sm" : "md"}
                onClick={onFollow}
                aria-label="Follow artist"
              >
                Follow
              </Button>
              <Button
                icon={<Share2 size={20} />}
                variant="ghost"
                colorScheme="brand"
                size={isCompact ? "sm" : "md"}
                onClick={onShare}
                aria-label="Share artist"
              >
                <Share2 />
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};