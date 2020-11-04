import Layout from '@/components/Layout';
import TopTracks from '@/components/TopTracks';
import Unsplash from '@/components/Unsplash';

const Dashboard = () => {
  return (
    <Layout>
      <Unsplash />
      <TopTracks />
    </Layout>
  );
};

export default Dashboard;
