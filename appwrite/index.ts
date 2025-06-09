import { Movie } from '@/constant/mockData';
import { Client, Databases, ID, Query } from 'react-native-appwrite';

let client: Client;

client = new Client();
client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!); // Your Project ID
//   .setPlatform('com.company.movieflix'); // Your package name / bundle identifier

const db = new Databases(client);

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

export const updateSearchCount = async (query: string, movie: Movie) => {
  try {
    const result = await db.listDocuments(DATABASE_ID, COLLECTION_ID, [
      Query.equal('searchTerm', query),
    ]);

    if (result.documents.length > 0) {
      const existingMovie = result.documents[0];
      await db.updateDocument(DATABASE_ID, COLLECTION_ID, existingMovie.$id, {
        count: existingMovie.count + 1,
      });
      console.log(`appwrite db updated: ${query}: `, { result });
    } else {
      await db.createDocument(DATABASE_ID, COLLECTION_ID, ID.unique(), {
        searchTerm: query,
        id: movie.id,
        title: movie.title,
        count: 1,
        poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
      });
      console.log(`appwrite db added: ${query}: `, { result });
    }
  } catch (error) {
    console.log('appwrite index', error.message);
  }
};

//TODO
export const trendingMovies = async () => {
  try {
  } catch (error) {}
};
