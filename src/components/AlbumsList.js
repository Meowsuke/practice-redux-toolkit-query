import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skeleton from "./Skeleton";
import ExandablePanel from "./ExpandablePanel";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);

  let content;
  if (isLoading) {
    content = <Skeleton time={3} />;
  } else if (error) {
    content = <div>Error loading albums.</div>;
  } else {
    content = data.map((albumn) => {
      const header = <div>{albumn.title}</div>;
      return (
        <ExandablePanel key={albumn.id} header={header}>
          List of photos in the albums
        </ExandablePanel>
      );
    });
  }
  console.log(data, error, isLoading);
  return (
    <div>
      <div>Albums For {user.name}</div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
