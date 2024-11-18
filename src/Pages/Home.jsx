import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';
import { fetchMovies, fetchMovieDetails } from '../utils/api.js';

const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState([]);
    const [submitClicked, setSubmitClicked] = useState(false);
    const [detailData, setDetailData] = useState(null);
    const [openModal, setOpenModal] = useState(true);

    const handleSearch = async () => {
        if (inputValue.trim() === '') {
            alert('Please enter a movie title to search.');
            return;
        }

        try {
            const results = await fetchMovies(inputValue);
            setMovies(results);
            setSubmitClicked(true);
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Failed to fetch movies. Please try again.');
        }
    };

    const handleMovieDetailData = async (id) => {
        try {
            const detailResult = await fetchMovieDetails(id);
            setDetailData(detailResult);
            setOpenModal(true);
        } catch (error) {
            console.error('Error fetching movie details:', error);
            alert('Failed to fetch movie details. Please try again.');
        }
    };

    return (
        <section className="text-center">
            <div className="flex justify-center gap-4">
                <Input
                    placeholder="Search for something"
                    onChange={(e) => {
                        if (submitClicked) {
                            setSubmitClicked(false);
                        }
                        setMovies([])
                        setInputValue(e.target.value);
                    }}
                    value={inputValue}
                    className="max-w-[500px]"
                />
                <Button type="primary" onClick={handleSearch}>
                    Search
                </Button>
            </div>

            {/* Display search results */}
            <div className="mt-8">
                {movies.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {movies.map((movie) => (
                            <div
                                key={movie.imdbID}
                                className="border p-4 rounded hover:shadow-lg"
                            >
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title || 'Movie Poster'}
                                    className="w-full h-64 object-cover mt-2"
                                />
                                <h3
                                    className="text-lg font-bold cursor-pointer"
                                    onClick={() => handleMovieDetailData(movie.imdbID)}
                                >
                                    {movie.Title}
                                </h3>
                                <p>{movie.Year}</p>
                            </div>
                        ))}
                    </div>
                ) : submitClicked ? (
                    <p>No movies found. Try searching for something else!</p>
                ) : null}
            </div>

            <Modal
                title={<p className='mb-4 text-3xl font-bold'>{detailData?.Title}</p> || 'Movie Details'}
                centered
                open={openModal && !!detailData}
                onOk={() => setOpenModal(false)}
                onCancel={() => setOpenModal(false)}
            >
                {detailData ? (
                    <>
                        <p className='text-lg font-bold mt-4 mb-2'>Plot Summary : <span className='text-lg font-normal '>{detailData.Plot}</span></p>

                        <p className='text-lg font-bold mt-4 mb-2'>Genre : <span className='text-lg font-normal'>{detailData.Genre}</span> </p>
                        <p className='text-lg font-bold mt-4 mb-2'>Rating :</p>
                        <div>
                            {
                                detailData?.Ratings.map((rating, index) => {
                                    return <div key={index} className='text-lg font-normal'>
                                        {index + 1}.   {rating.Source}: {rating.Value}
                                    </div>
                                })
                            }
                            {/* {Array.isArray(detailData.Rating) &&
                                detailData.Rating.map((rating, index) => (
                                    <div key={index}>
                                        {rating.Source}: {rating.Value}
                                    </div>
                                ))} */}
                        </div>
                    </>
                ) : (
                    <p>Loading details...</p>
                )}
            </Modal>
        </section>
    );
};

export default Home;
