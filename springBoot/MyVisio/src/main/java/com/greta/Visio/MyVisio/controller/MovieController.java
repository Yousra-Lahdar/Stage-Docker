package com.greta.Visio.MyVisio;

import com.greta.Visio.MyVisio.entities.Movie;
import com.greta.Visio.MyVisio.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/movie")
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @GetMapping
    public List<Movie> newMovie(){
     return movieRepository.findAll();
    }

}
