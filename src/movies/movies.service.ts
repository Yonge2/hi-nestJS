import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll():Movie[]{
        return this.movies;
    }
    getOne(id: string):Movie{
        return this.movies.find(movie => movie.id===parseInt(id))
    }
    delete(id: string){
        this.movies = this.movies.filter(movie=> movie.id !== parseInt(id));
    }
    create(movieData){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        });
        return true;
    }
    update(id: string, updateData){
        const movie = this.getOne(id);
        this.delete(id);
        this.movies.push({...movie, ...updateData});
    }
}
