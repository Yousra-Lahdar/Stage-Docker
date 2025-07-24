package com.gretacdl.carapi.car_api.model;

import java.util.List;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

@Entity
public class Owner {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long ownerId;

    @NotBlank
    private String name;

    @Email
    @NotBlank
    private String email;

    @OneToMany(mappedBy = "owner") // cela signifie que c’est la classe Car qui contient la clé étrangère (owner)
    private List<Car> cars;

    // constructeur
    public Owner() {

    }

    // get set
    public Long getOwerId() {
        return this.ownerId;
    }

    public void setOwerId(Long owerId) {
        this.ownerId = owerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Car> getCars() {
        return this.cars;
    }

    public void setCars(List<Car> cars) {
        this.cars = cars;
    }

}
