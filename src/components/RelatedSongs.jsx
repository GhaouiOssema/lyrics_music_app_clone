import SongBar from './SongBar';

const RelatedSongs = ({
	data,
	artistId,
	isPlaying,
	activeSong,
	handlePauseClick,
	handlePlayClick,
}) => {
	const aa = 'dd';

	return (
		<div className='flex flex-col'>
			<h1 className='font-bold text-white text-3xl'>Related Songs :</h1>
			<div className='mt-6 w-full flex flex-col'>
				{data?.map((song, i) => (
					<SongBar
						key={`${artistId}-${song.key}-${i}`}
						song={song}
						i={i}
						artistId={artistId}
						isPlaying={isPlaying}
						activeSong={activeSong}
						handlePauseClick={handlePauseClick}
						handlePlayClick={handlePlayClick}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedSongs;