import Image from "next/image";
import SectionTitle from "../elements/SectionTitle";
import Link from "next/link";

const SplashHomeDemo = () => {
    const HomeDemo = [
        {
            title: "Home",
            thumb: "/images/preview/home-01.png",
            url: "/"
        },
       
    ]

    return (
      <div className="pv-demo-area" id="demos">
        <div className="container">
            <SectionTitle 
            subtitle="Home Pages"
            subtitleIcon="fas fa-fire"
            subColor="highlighter-secondary"
            title="Our Template is Just <br/>
            Ready to Use"
            />
          <div className="row">
            {HomeDemo.map((data, index) => (
                <div className="col-lg-6 col-md-6 col-12" key={index}>
                 <div className="pv-single-demo">
                   <div className="thumb box">
                     <Image 
                     src={data.thumb}
                     width={630}
                     height={517}
                     alt={data.title}
                     />
                     <Link href={data.url} className="axil-btn btn-bg-primary right-icon view-btn">
                     View Demo <i className="fal fa-long-arrow-right" />
                     </Link>
                   </div>
                   <h5 className="title">
                    <Link href={data.url}>{data.title}</Link>
                   </h5>
                 </div>
               </div>
            ))}
           
            <div className="col-lg-6 col-md-6 col-12">
              <div className="pv-single-demo commin">
                  <div className="thumb box">
                    <Image 
                    src="/images/preview/comming-soon.png"
                    height={517}
                    width={630}
                    alt="Coming Soon Page"
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default SplashHomeDemo;