
import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/useStarredShows';
import { getShowsByIds } from '../api/tvmaze';
import ShowGrid from '../components/shows/ShowGrid';
import { TextCenter } from '../common/TextCenter';

const Starred = () => {

  const [starredShowsIds] = useStarredShows()


  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ["starred", starredShowsIds],
    queryFn: () =>
      getShowsByIds(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    refetchOnWindowFocus: false
  })

  console.log(starredShows)

  if (starredShows?.length > 0) {
    return <ShowGrid show={starredShows} />
  }
  if (starredShows?.length === 0) {
    return <TextCenter>No Shows were Starred</TextCenter>
  }
  if (starredShowsError) {
    return <TextCenter>Error occured : {starredShowsError.message}</TextCenter>
  }

  return <TextCenter>Shows are Loading</TextCenter>;
};

export default Starred;
