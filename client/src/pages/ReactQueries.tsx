import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const ReactQueries = () => {
  const { data, isLoading, error, refetch } = useQuery(['cats'], () => {
    return axios.get('ps://catfact.ninja/fact').then((res) => res.data);
  });
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  }
  if (error) return <div>Error</div>;
  return (
    <>
      <div className="text-5xl">{data?.fact}</div>
      <button onClick={(event) => refetch}>refetch</button>
    </>
  );
};

export default ReactQueries;
