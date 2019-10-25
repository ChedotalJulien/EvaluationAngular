package co.simplon.travel.dao;

import co.simplon.travel.entities.Hotel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;
@CrossOrigin("*")
@RepositoryRestResource
public interface HotelRepository extends JpaRepository<Hotel, Long> {
    @RestResource(path = "/selectedHotel")
    public List<Hotel> findBySelectedIsTrue();
    @RestResource(path = "/HotelByKeyword")
    public List<Hotel> findByNameContains(@Param("mc") String mc);
    @RestResource(path = "/promoHotel")
    public List<Hotel> findByPromotionIsTrue();
    @RestResource(path = "/dispoHotel")
    public List<Hotel> findByAvailableIsTrue();
}