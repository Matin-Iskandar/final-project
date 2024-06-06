import React from "react";
import "../components/ReadMore.scss";
import { NavLink } from "react-router-dom";
const ReadMore = () => {
  return (
    <div className="read-container">
      <section className="heading">
        <ul>
          <li>
            <a href="#">Home</a> <img src="/images/arrow.svg" alt="" />
          </li>
          <li>
            <NavLink to={`/article`}>
              Article
              <img src="/images/arrow.svg" alt="" />
            </NavLink> 
          </li>
          <li>
            <a href="#">Company News</a> <img src="/images/arrow.svg" alt="arrow" />
          </li>
          <li>
            <a className="current-a-read" href="#">
              Detail Article
            </a>
            <img src="/images/arrow.svg" alt="" />
          </li>
        </ul>
      </section>
  <img className="readblogimg1200pc" src="/images/readblogimg1200pc.svg" alt="pc" />
    <img className="readblogimg" src="/images/blogheadingimg.svg" alt="" />
      <main>
        <div className="read-cards">
          <h4>Related article</h4>
          <section className="related">
            <img className="read-img" src="/images/read-card-1.png" />
            <p>The 9 best things Lenny announced at CES 2023</p>{" "}
          </section>
          <section>
            <img className="read-img" src="/images/read-card-2.png" />
            <p>
              Lenny announces the first Ring Car Cam is available for pre-order
            </p>
          </section>
          <section>
            <img className="read-img" src="/images/read-card-3.png" />
            <p>Lenny’s Machine Learning University debuts responsible</p>
          </section>
          <section>
            <img className="read-img" src="/images/read-card-4.png" />
            <p>Lenny Games and Crystal Dynamics to develop game</p>
          </section>
          <hr />
          <section className="socials">
            <span>Share to:</span>{" "}
            <ul>
              <li>
                <a href="#">
                  <img src="/images/Facebook.png" alt="Facebook" />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/images/Instagram.png" alt="Instagram" />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/images/Twitter.png" alt="Twitter" />
                </a>
              </li>

              <li>
                <a href="#">
                  <img src="/images/Whatsapp.png" alt="Whatsapp" />
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div>
          <h3>
            I’m an Lenny delivery driver in Baltimore. My favorite features on
            our vans from Rivian are the air-conditioned seats and the screen
            built into the dash.
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur. Venenatis sit dignissim vel
            lacus aliquet massa quam nisi tincidunt. Ante eu ut arcu ultrices
            vitae libero interdum. Ac tempus elementum suspendisse amet massa
            nec nunc ullamcorper venenatis. Sed id tortor in nibh tortor
            commodo. Ultricies et vitae massa ut et mi. Quam amet nulla lobortis
            rhoncus ipsum pharetra elementum magna vitae. Eget orci feugiat
            lectus aliquet.
          </p>
          <p>
            Amet pretium dui nunc laoreet sed lorem. Pretium volutpat mauris sit
            curabitur pellentesque orci. Integer egestas dictum quis eget in
            libero eget. Elementum magna amet quam sem rhoncus lacus. Augue
            dignissim enim elementum egestas at sed dui. Consequat nibh ut urna
            morbi a. Convallis nulla a pulvinar augue cursus neque tortor.
            Accumsan erat ultrices magna mattis egestas vel. Consequat at arcu
            risus a enim at orci velit. Nam consequat mauris malesuada phasellus
            vel consequat varius vitae suspendisse. Adipiscing adipiscing lacus
            nulla tortor ultrices sed eget. Aliquet ornare adipiscing lacus non
            elit vel. Tortor sed adipiscing imperdiet tortor quam dolor augue
            molestie. Interdum turpis in tortor velit urna augue.
          </p>

          <h3>Sed id tortor in nibh tortor commodo</h3>
          <p>
            Lectus sed eu suscipit et rhoncus quis massa. Tincidunt diam massa
            id id scelerisque. Id in egestas sed duis duis congue. Arcu
            suspendisse habitant mauris elementum aliquet. Sit blandit id
            pellentesque tempor. Turpis tortor malesuada pulvinar sollicitudin
            felis eget. Vulputate enim at varius nec. Pellentesque senectus
            pellentesque sollicitudin cursus lacus.
          </p>

          <h3>Sed id tortor in nibh tortor commodo</h3>
          <p>
            Lorem vitae tristique aliquam at id morbi. Quis sit lectus orci
            accumsan neque diam scelerisque euismod. Vulputate parturient dictum
            eget et elit phasellus. Eget ullamcorper sed imperdiet orci arcu
            nibh sit potenti fringilla. Vel enim est cursus eu phasellus
            porttitor. Etiam donec senectus viverra sit pretium amet mattis quis
            adipiscing. Tristique blandit enim laoreet elit commodo. Sit
            nascetur auctor porta velit id nec ultricies aenean dolor. Tincidunt
            sagittis a commodo tellus. Vulputate ullamcorper facilisis in ac eu
            risus quis placerat. Id egestas gravida sit aliquam neque in ut
            quam. Tempus adipiscing tortor viverra sociis elementum adipiscing
            nisi cras.
          </p>

          <h3>Sed id tortor in nibh tortor commodo</h3>
          <p>
            Diam consectetur sit maecenas laoreet egestas. Quam erat sed velit
            mi nunc lectus. Hendrerit duis gravida sit est nullam leo massa nisl
            ac. Maecenas velit semper tempor magna. Cursus risus sed egestas
            morbi eleifend nec eu. Enim ultrices aliquam elementum et eu rutrum.
            Scelerisque elementum eget eu quam blandit sit rutrum tortor.
            Dictumst venenatis suspendisse mauris cras. Amet nunc euismod
            condimentum id leo praesent etiam feugiat. Sollicitudin amet
            parturient pellentesque sapien. At sollicitudin leo amet sed ut. A
            egestas imperdiet et non turpis vestibulum. Dolor pharetra nam quis
            facilisis tempus. Aliquam aliquam turpis neque et ornare massa quam.
            Consequat sem est quis imperdiet nam. Nisl consequat dapibus purus
            id fermentum tortor egestas. Facilisi purus fringilla ac mus duis et
            faucibus nunc.
          </p>
          <p className="third-read">
            Scelerisque felis at ipsum faucibus aliquam sagittis gravida. Vitae
            in feugiat sit malesuada mus viverra quam ante. In feugiat ut mauris
            nibh ante. Est nunc donec amet ligula urna. Consequat nisl lacus
            eget sit non ut. Odio condimentum eu pharetra mollis ipsum
            condimentum tristique pharetra nullam. Ultricies sit at etiam augue
            tincidunt aliquet amet sed suspendisse. Facilisi at elit eget
            viverra mattis consectetur egestas accumsan eu. Ac penatibus viverra
            diam augue nulla sed. Viverra ut sapien diam amet porttitor.
            Scelerisque nulla tristique cursus a sagittis non. Nec viverra quis
            massa proin.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ReadMore;
