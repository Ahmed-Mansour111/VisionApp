using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using ReflectionIT.Mvc.Paging;
using Vision.Data;
using Vision.Models;

namespace Vision.Controllers
{
    public class HotelsController : Controller
    {
        private readonly VisionContext _context;

        public HotelsController(VisionContext context)
        {
            _context = context;
        }


        public async Task<IActionResult> Index(int pageindex = 1)
        {


            var query = _context.Hotels.AsNoTracking().OrderBy(i => i.Id);
            var model = await PagingList.CreateAsync(query, 6, pageindex);
            return View(model);
        }



  



        // GET: Hotels/Details
        public async Task<IActionResult> Details(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var hotel = await _context.Hotels
                .FirstOrDefaultAsync(m => m.Id == id);
            if (hotel == null)
            {
                return NotFound();
            }

            return View(hotel);
        }

       
    }
}
