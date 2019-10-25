package co.simplon.travel;

import co.simplon.travel.dao.CityRepository;
import co.simplon.travel.dao.HotelRepository;
import co.simplon.travel.entities.City;
import co.simplon.travel.entities.Hotel;
import net.bytebuddy.utility.RandomString;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;

import java.util.Random;

@SpringBootApplication
public class TravelApplication implements CommandLineRunner {
	@Autowired
	private HotelRepository hotelRepository;
	@Autowired
	private CityRepository cityRepository;
	@Autowired
	private RepositoryRestConfiguration repositoryRestConfiguration;

	public static void main(String[] args) {
		SpringApplication.run(TravelApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {

		repositoryRestConfiguration.exposeIdsFor(Hotel.class,City.class);

		cityRepository.save(new City(null,"Toulouse",null,null,null));
		cityRepository.save(new City(null,"Lyon",null,null,null));
		cityRepository.save(new City(null,"Nantes",null,null,null));
		Random rnd=new Random();
		cityRepository.findAll().forEach(c->{
			for (int i = 0; i <10 ; i++) {
				Hotel h=new Hotel();
				h.setName(RandomString.make(20));
				h.setCurrentPrice(100+rnd.nextInt(1000));
				h.setAvailable(rnd.nextBoolean());
				h.setPromotion(rnd.nextBoolean());
				h.setSelected(rnd.nextBoolean());
				h.setCity(c);
				h.setPhotoName("");

				hotelRepository.save(h);

			}
		});
	}

}
