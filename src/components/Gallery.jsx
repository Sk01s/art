import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Row, Nav, Tab } from "react-bootstrap";
import app from "@/app.json";
import { getAllArtDocuments } from "@/lib/firebase";

function Gallery() {
  const path = useSearchParams();
  const [artDocuments, setArtDocuments] = useState([]);
  const [artData, setArtData] = useState({});
  const [isOpen, setOpen] = useState(!!artData);

  // useEffect(() => {
  //   // Parse image name from the router path
  //   const image = path.get("image");
  //   if (image) {
  //     const extractedartData = image;
  //     setArtData(extractedartData);
  //     setOpen(true);
  //   }
  // }, [path?.get("image")]);
  useEffect(() => {
    if (artData.name) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [artData]);
  useEffect(() => {
    const fetchArtDocuments = async () => {
      try {
        const documents = await getAllArtDocuments();
        setArtDocuments(documents);
      } catch (error) {
        console.error("Error fetching art documents:", error.message);
      }
    };

    fetchArtDocuments();
  }, []);
  console.log(artData);

  return (
    <>
      {isOpen && (
        <div className="overlay-window gallery-overlay colors-g background-95-g show">
          <div className="overlay-control background-90-b">
            {/* <a className="previos" href="#"></a>
            <a className="next" href="#"></a> */}
            <div
              className="cross"
              style={{ cursor: "pointer" }}
              onClick={() => setArtData(false)}
            ></div>
          </div>
          <div className="overlay-view">
            <div className="loaded-content content-container show">
              <div className="item-content">
                <div className="container">
                  <h3>
                    <span className="highlight"></span>
                  </h3>
                  <div className="row">
                    <div className="col-md-9">
                      <img
                        width="100%"
                        className="fluid-width"
                        alt="Project 1"
                        src={artData.imageUrl}
                      />
                    </div>
                    <div className="col-md-3" style={{ marginTop: "50%" }}>
                      <h4>{artData.name}</h4>
                      <p>
                        <span className="field">{artData.size}</span>
                      </p>
                      <p>{artData.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="loader">
            <li className="background-highlight-e"></li>
            <li className="background-highlight-e"></li>
            <li className="background-highlight-e"></li>
          </ul>
        </div>
      )}

      <section id="work">
        <div className="view">
          <div className="content no-bottom-padding colors-e background-solid">
            <div className="gallery colors-h background-solid">
              <div className="container">
                <h2>Artworks</h2>
              </div>
              <Tab.Container defaultActiveKey={app.categories[0].value}>
                <div className="filter">
                  <Nav variant="pills" className="text-center">
                    {app.categories.map((category, index) => (
                      <Nav.Item as={"li"} key={index}>
                        <Nav.Link
                          href=""
                          eventKey={category.value}
                          className="hover-effect"
                        >
                          {category.label}
                        </Nav.Link>
                      </Nav.Item>
                    ))}
                  </Nav>
                </div>
                <Tab.Content>
                  {app.categories.map((category, index) => {
                    const arts = artDocuments.filter(
                      (art) => art.category.value === category.value
                    );
                    return (
                      <Tab.Pane eventKey={category.value} key={index}>
                        <Row>
                          <div
                            className="grid shuffle"
                            style={{
                              position: "relative",
                              transition: "height 500ms ease-out 0s",
                            }}
                          >
                            {arts.map((art, index) => (
                              <div
                                key={index}
                                className="item col-md-3 col-sm-4 col-xs-6 picbox shuffle-item concealed"
                                style={{
                                  transition:
                                    "transform 500ms ease-out 0s, opacity 500ms ease-out 0s",
                                }}
                              >
                                <Link
                                  onClick={() => setArtData(art)}
                                  href={""}
                                  className="hover-overlay"
                                >
                                  <img alt="Project 8" src={art.imageUrl} />
                                  <div className="overlay background-90-a">
                                    <div className="">
                                      <p className="title heading-a">Image</p>
                                      <p className="text-center heading-a">
                                        <strong>{art.name}</strong>
                                      </p>
                                      <p className="text-center">
                                        <i className="fa fa-picture-o heading-a"></i>
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </Row>
                      </Tab.Pane>
                    );
                  })}
                  <Tab.Pane eventKey="first">
                    <Row>
                      <div
                        className="grid shuffle"
                        style={{
                          position: "relative",
                          height: "406.4px",
                          transition: "height 500ms ease-out 0s",
                        }}
                      ></div>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
