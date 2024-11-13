interface Version {
  id: string;
  year: number;
  format: string;
  country: string;
  label: string;
  catNo: string;
  notes?: string;
  price?: string;
}

export interface Album {
  id: string;
  title: string;
  releaseYear: number;
  artwork: string;
  versions: number;
  rating: number;
  formats: string[];
  type: 'album' | 'single' | 'compilation' | 'video';
  versionsList: Version[];
}

export const discography: Album[] = [
  {
    id: 'ram',
    title: 'Random Access Memories',
    releaseYear: 2013,
    artwork: 'https://i.discogs.com/zFVZE4s0zSXUIM7OMl2UDckSq0zlopdHBHRz23zqMJk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTUzOTI5NTA5/Mi02MDg3LnBuZw.jpeg',
    versions: 142,
    rating: 4.8,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2013,
        format: '2xLP, Album',
        country: 'US',
        label: 'Columbia',
        catNo: '88883716861',
        notes: 'Gatefold sleeve, 180g vinyl',
        price: '$34.99',
      }
    ]
  },
  {
    id: 'discovery',
    title: 'Discovery',
    releaseYear: 2001,
    artwork: 'https://i.discogs.com/6gMPje3DUKa1LMojsHtGTE5o4fIQon5lYaIJvALlvVM/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Nzkt/MTIzNjAzNTQ3Mi5q/cGVn.jpeg',
    versions: 98,
    rating: 4.9,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2001,
        format: '2xLP, Album',
        country: 'US',
        label: 'Virgin',
        catNo: 'V2940',
        notes: 'Original pressing',
        price: '$45.99',
      }
    ]
  },
  {
    id: 'homework',
    title: 'Homework',
    releaseYear: 1997,
    artwork: 'https://i.discogs.com/Tgzu71VlahJ9X8cu0eaqutNNlPWJOqelug4Czwwa6BM/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDc2/NTUtMTY3MDAwMjM2/NC01MjE4LmpwZWc.jpeg',
    versions: 76,
    rating: 4.7,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 1997,
        format: '2xLP, Album',
        country: 'France',
        label: 'Virgin',
        catNo: 'V2821',
        notes: 'First pressing',
        price: '$89.99',
      }
    ]
  },
  {
    id: 'alive-2007',
    title: 'Alive 2007',
    releaseYear: 2007,
    artwork: 'https://i.discogs.com/3z9ppYLGHqhSzWWAw2FrUxxCAgA-dn_vOpvNEwGX6xc/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDEx/MjMtMTE5NTgyMzE2/My5qcGVn.jpeg',
    versions: 45,
    rating: 4.8,
    type: 'compilation',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2007,
        format: '2xLP, Live',
        country: 'Europe',
        label: 'Virgin',
        catNo: 'VX3003',
        notes: 'Live recording',
        price: '$41.99',
      }
    ]
  },
  {
    id: 'tron',
    title: 'TRON: Legacy',
    releaseYear: 2010,
    artwork: 'https://i.discogs.com/Ie-ZAT_Lbvc1dGud11MDw3RKO65NQrzPKkBvqVVk7Hg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwODk5/NDctMTQ1NTM2MDIz/OC0zNDgwLmpwZWc.jpeg',
    versions: 52,
    rating: 4.6,
    type: 'album',
    formats: ['2xLP', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2010,
        format: '2xLP, Soundtrack',
        country: 'US',
        label: 'Walt Disney Records',
        catNo: 'D000633401',
        notes: 'Original soundtrack',
        price: '$43.99',
      }
    ]
  },
  {
    id: 'get-lucky',
    title: 'Get Lucky',
    releaseYear: 2013,
    artwork: 'https://i.discogs.com/Q8J5LXD_MqyGZHmLGQwLEwE8vJchs4tWB_KqFM-dKVE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NzE4/OTAtMTUwMDMwNzE1/OS05ODk4LmpwZWc.jpeg',
    versions: 38,
    rating: 4.5,
    type: 'single',
    formats: ['12"', 'CD', 'Digital'],
    versionsList: [
      {
        id: 'v1',
        year: 2013,
        format: '12", Single',
        country: 'Europe',
        label: 'Columbia',
        catNo: '88883716857',
        notes: 'Limited Edition',
        price: '$24.99',
      }
    ]
  }
];