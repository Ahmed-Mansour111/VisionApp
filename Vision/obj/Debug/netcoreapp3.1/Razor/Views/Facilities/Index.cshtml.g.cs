#pragma checksum "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "48c564ab784f6c5426da315811d4ec689eb865c2"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Facilities_Index), @"mvc.1.0.view", @"/Views/Facilities/Index.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\_ViewImports.cshtml"
using Vision;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\_ViewImports.cshtml"
using Vision.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"48c564ab784f6c5426da315811d4ec689eb865c2", @"/Views/Facilities/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"3c029e0582d750bb1125ebd1bd790db1024a4483", @"/Views/_ViewImports.cshtml")]
    public class Views_Facilities_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<Vision.Models.Facility>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral("\r\n");
#nullable restore
#line 3 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml"
  
    ViewData["Title"] = "Index";

#line default
#line hidden
#nullable disable
            WriteLiteral("\r\n    <div style=\"margin-top:100px;\">\r\n\r\n        <div class=\"row\">\r\n");
#nullable restore
#line 10 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml"
             foreach (var item in Model)
            {

#line default
#line hidden
#nullable disable
            WriteLiteral("                <div class=\"col-sm-4\">\r\n                    <div class=\"card\" style=\"width: 18rem;\">\r\n                        <img class=\"card-img-top\"");
            BeginWriteAttribute("src", " src=\"", 363, "\"", 421, 1);
#nullable restore
#line 14 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml"
WriteAttributeValue("", 369, Html.DisplayFor(modelItem => item.FacilityImageUrl), 369, 52, false);

#line default
#line hidden
#nullable disable
            EndWriteAttribute();
            WriteLiteral(" alt=\"Card image cap\">\r\n                        <div class=\"card-body\">\r\n                            <p class=\"card-text\">");
#nullable restore
#line 16 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml"
                                            Write(Html.DisplayFor(modelItem => item.FacilityName));

#line default
#line hidden
#nullable disable
            WriteLiteral("</p>\r\n\r\n                            \r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n");
#nullable restore
#line 23 "E:\Vision\VisionGit\VisionTask\Vision\Vision\Views\Facilities\Index.cshtml"
            }

#line default
#line hidden
#nullable disable
            WriteLiteral("        </div>\r\n    </div>");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<Vision.Models.Facility>> Html { get; private set; }
    }
}
#pragma warning restore 1591
