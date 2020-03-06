using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Vision.Models;

namespace Vision.Data
{
    public class DbInitializer
    {
        public static void Initialize(VisionContext context)
        {

            context.Database.EnsureCreated();

            // Look for any students.
            if (context.Hotels.Any())
            {
                return;   // DB has been seeded
            }

            var hotels = new Hotel[]
            {
            new Hotel{Name="Pagwat1",Location="Sewa",ImageUrl="Images/photos/hotel-1.jpg"},
            new Hotel{Name="Pagwat2",Location="Cairo",ImageUrl="Images/photos/hotel-2.jpg"},
            new Hotel{Name="Pagwat3",Location="Aswan",ImageUrl="Images/photos/hotel-3.jpg"},
            new Hotel{Name="Pagwat4",Location="Qena",ImageUrl="Images/photos/video-img.png"},
            new Hotel{Name="Pagwat5",Location="Sohag",ImageUrl="Images/photos/hotel-3.jpg"},
            new Hotel{Name="Pagwat6",Location="Banha",ImageUrl="Images/photos/hotel-3.jpg"},
            new Hotel{Name="Pagwat4",Location="Qena",ImageUrl="Images/photos/hotel-3.jpg"},
            new Hotel{Name="Pagwat5",Location="Sohag",ImageUrl="Images/photos/hotel-3.jpg"},
            new Hotel{Name="Pagwat6",Location="Banha",ImageUrl="Images/photos/hotel-3.jpg"},

            };
            foreach (Hotel s in hotels)
            {
                context.Hotels.Add(s);
            }
            context.SaveChanges();


            // Look for any students.
            if (context.Facilities.Any())
            {
                return;   // DB has been seeded
            }

            var facilities = new Facility[]
            {
            new Facility{FacilityName="Camping Area" , FacilityImageUrl="Images/Facility/img_17.jpg"},
            new Facility{FacilityName="Sand Surving" , FacilityImageUrl="Images/Facility/img_13.jpg"},
            new Facility{FacilityName="Osais Show" , FacilityImageUrl="Images/Facility/img_14.jpg"},
            new Facility{FacilityName="Mandi Dinner" , FacilityImageUrl="Images/Facility/img_15.jpg"},
            new Facility{FacilityName="Motocycles" , FacilityImageUrl="Images/Facility/img_18.jpg"},


            };
            foreach (Facility s in facilities)
            {
                context.Facilities.Add(s);
            }
            context.SaveChanges();
        }
    }
}