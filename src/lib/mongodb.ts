import dns from "dns";
import { MongoClient, Db } from "mongodb";

// Ensure reliable SRV record resolution across various Windows/ISP DNS configurations
try {
  dns.setServers(["8.8.8.8", "1.1.1.1", "8.8.4.4"]);
} catch (e) {
  // Ignore in environments where setting DNS servers is restricted
}

const uri =
  process.env.MONGODB_URI ||
  "mongodb+srv://adarshsachan9967_db_user:4vdVPmlv1eQYlW9Y@natwarlal.nftjfup.mongodb.net/natwarlal?retryWrites=true&w=majority";
const dbName = process.env.MONGODB_DB || "natwarlal";

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;

export async function getDatabase(): Promise<Db> {
  const connectedClient = await clientPromise;
  return connectedClient.db(dbName);
}
