import { useGetAllAttractionsQuery } from "./services/attraction";
import { DataGrid } from '@mui/x-data-grid';

function App() {
  const { data, error, isLoading } = useGetAllAttractionsQuery()

  const columns = [
    { field: 'id', headerName: 'id', width: 50 },
    { field: 'name', headerName: 'name', width: 150 },
    { field: 'detail', headerName: 'detail', width: 500 },
  ];

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <ul>
            {data.map(attraction=>(
              <li key={attraction.id}>
                {attraction.name} {attraction.detail}
              </li>
            ))}
          </ul>
        </>
      ) : null}
    </div>
  );
}

export default App;
