package co.simplon.travel.web;

import co.simplon.travel.dao.HotelRepository;
import co.simplon.travel.entities.Hotel;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Files;
import java.nio.file.Paths;

@CrossOrigin("*")
@RestController
    public class CatalogueRestController {
        private HotelRepository hotelRepository;

      public CatalogueRestController(HotelRepository hotelRepository) {
            this.hotelRepository = hotelRepository;
      }
        @GetMapping(path="/photohotel/{id}",produces = MediaType.IMAGE_PNG_VALUE)
            public byte[] getPhoto(@PathVariable("id") Long id) throws Exception{
                Hotel h = hotelRepository.findById(id).get();
                return Files.readAllBytes(Paths.get(System.getProperty("user.home")+"/travel/hotels/"+h.getPhotoName()));
        }

        @PostMapping(path = "/uploadPhoto/{id}")
            public void uploadPhoto(MultipartFile file, @PathVariable Long id) throws Exception{
                Hotel h = hotelRepository.findById(id).get();
                h.setPhotoName(file.getOriginalFilename());
                Files.write(Paths.get(System.getProperty("user.home")+"/travel/hotels/"+h.getPhotoName()),file.getBytes());
                hotelRepository.save(h);
        }
    }
