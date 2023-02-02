package com.vp.travelplanner.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.io.Serializable;
import java.util.Objects;

/**
 * City class
 */
@Entity
public class City implements Serializable{

    /**
     *
     */
    private static final long serialVersionUID = 1L;

    @Id
    @Column(nullable = false, updatable = false)
    String name; // name of the city
    @Column(nullable = false)
    String label = "Description unavailable"; // short description of the city
    @Column(nullable = false)
    String imagelink = "Image montage unavailable"; // link to city image montage, a single .png, .jpg/.jpeg, .bmp or .gif file

    /**
     * Default constructor as Hibernate requries it.
     */
    public City(){}

    /**
     * @param name name of the city
     * @param label short description of the city
     * @param imagelink link to city image montage, a single .png, .jpg/.jpeg, .bmp or .gif file
     * @return a freshly created city object
     */
    public City(String name, String label, String imagelink) {
        this.name = name;
        this.label = label;
        this.imagelink = imagelink;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getImagelink() {
        return imagelink;
    }

    public void setImagelink(String imageLink) {
        this.imagelink = imageLink;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof City)) return false;
        City city = (City) o;
        return Objects.equals(name, city.name) && Objects.equals(label, city.label) && Objects.equals(imagelink, city.imagelink);
    }

    @Override
    public int hashCode() {
        return Objects.hash(name, label, imagelink);
    }

    @Override
    public String toString() {
        return "City{" +
                "name='" + name + '\'' +
                ", label='" + label + '\'' +
                ", imageLink='" + imagelink + '\'' +
                '}';
    }
}
