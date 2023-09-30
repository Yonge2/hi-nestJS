import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movies.entity';
import { CreateMoiveDTO } from './dto/create-movie.dto';
import { UpdateMoiveDTO } from './dto/update-movie.dte';

@Injectable()
export class MoviesService {
    private movies: Movie[] = [];

    getAll():Movie[]{
        return this.movies;
    }
    getOne(id: number):Movie{
        return this.movies.find(movie => movie.id===id)
    }
    delete(id: number){
        this.movies = this.movies.filter(movie=> movie.id !== id);
    }
    create(movieData: CreateMoiveDTO){
        this.movies.push({
            id: this.movies.length+1,
            ...movieData
        });
        return true;
    }
    update(id: number, updateData: UpdateMoiveDTO){
        const movie = this.getOne(id);
        this.delete(id);
        this.movies.push({...movie, ...updateData});
    }
}
