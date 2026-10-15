import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import * as movieService from '../services/movieService';

jest.mock('../services/movieService');

test('displays search results when user searches', async () => {
    const mockSearchResults = [
        { id: 3, title: 'Star Wars', vote_average: 3.2 }
    ];
  
    recipeService.getPopularMovies.mockResolvedValue([]);
    recipeService.searchMovies.mockResolvedValue(mockSearchResults);
  
    render(<App />);
  
    const searchInput = screen.getByPlaceholderText('Search movies...');
    const searchButton = screen.getByText('Search');
  
    fireEvent.change(searchInput, { target: { value: 'wars' } });
    fireEvent.click(searchButton);
  
    await waitFor(() => {
        expect(screen.getByText('Star Wars')).toBeInTheDocument();
    });
});