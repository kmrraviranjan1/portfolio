import React /*,  { useState }  */ from "react";
import {
  ProjectContainer,
  PageHeading,
  ProjectWrapper,
  ProjectCard,
  ImageContainer,
  Image,
  DescriptionWrapper,
  Heading,
  Info,
  TechWrapper,
  Tech,
  // DemoWrapper,
  // Demo,
  // DemoVideo,
  ButtonWrapper,
  Deploy,
  Github,
} from "./Project.style";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiMongodb,
  SiMaterialui,
  SiStyledcomponents,
  SiNodedotjs,
} from "react-icons/si";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-modal/styles.css";
// import { Modal } from "react-responsive-modal";

const Project = () => {
  const projects = [
    {
      heading: "Norstrom Clone",
      info: "An ecommerce cloth shopping app",
      tech: [
        { icon: SiHtml5, title: "HTML" },
        { icon: SiCss3, title: "CSS" },
        { icon: SiJavascript, title: "JavaScript" },
      ],
      deployL: "https://kmrraviranjan1.github.io/nordstromClone/",
      gitL: "https://github.com/kmrraviranjan1/nordstromClone",
      src1: "assets/projects/nordstrom.png",
      src2: "assets/projects/n_apparel.png",
      src3: "assets/projects/n_clothing.png",
    },
    {
      heading: "Naukri Clone",
      info: "A job serching app",
      tech: [
        { icon: SiReact, title: "React" },
        { icon: SiMaterialui, title: "MaterualUi" },
        { icon: SiStyledcomponents, title: "Styled-Components" },
      ],
      deployL: "https://6v6lb.csb.app/",
      gitL: "https://github.com/kmrraviranjan1/Naukri-Clone",
      src1: "assets/projects/naukri.png",
      src2: "assets/projects/na_jobs.png",
      src3: "assets/projects/na_login.png",
    },
    {
      heading: "Orbitz Clone",
      info: "A hotel searching and booking app",
      tech: [
        { icon: SiReact, title: "React" },
        { icon: SiRedux, title: "Redux" },
        { icon: SiMaterialui, title: "MaterialUi" },
        { icon: SiStyledcomponents, title: "Styled-Components" },
        { icon: SiNodedotjs, title: "Json-MockServer" },
      ],
      deployL: "https://orbitz.netlify.app/",
      gitL: "https://github.com/kmrraviranjan1/orbitz-clone",
      src1: "assets/projects/orbitz.png",
      src2: "assets/projects/o_confirm.png",
      src3: "assets/projects/o_map.png",
    },
    
    {
      heading: "Facebook Clone",
      info: "A hotel searching and booking app",
      tech: [
        { icon: SiReact, title: "React" },
        { icon: SiRedux, title: "Redux" },
        { icon: SiMaterialui, title: "MaterialUi" },
        { icon: SiStyledcomponents, title: "Styled-Components" },
        { icon: SiNodedotjs, title: "Json-MockServer" },
        { icon: SiMongodb, title: "Json-MockServer" },
      ],
      deployL: "https://orbitz.netlify.app/",
      gitL: "https://github.com/kmrraviranjan1/orbitz-clone",
      src1: "assets/projects/orbitz.png",
      src2: "assets/projects/o_confirm.png",
      src3: "assets/projects/o_map.png",
    },
  ];
  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);
  // const [modalVal, setModalVal] = useState({});
  // const closeIcon = (
  //   <svg
  //     fill="currentColor"
  //     viewBox="0 0 20 20"
  //     width={28}
  //     height={28}
  //     padding={1}
  //   >
  //     <path
  //       fillRule="evenodd"
  //       d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
  //       clipRule="evenodd"
  //     ></path>
  //   </svg>
  // );
  return (
    <ProjectContainer>
      <PageHeading>My Recent Projects</PageHeading>
      <ProjectWrapper>
        {projects.map((proj) => {
          let { heading, info, tech, deployL, gitL, src1, src2, src3 } = proj;
          return (
            <ProjectCard>
              <ImageContainer>
                <Carousel
                  autoPlay
                  infiniteLoop
                  showThumbs={false}
                  showStatus={false}
                  transitionTime="all 3s"
                >
                  <div style={{ padding: "2rem" }}>
                    <Image src={src1} alt="" />
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <Image src={src2} alt="" />
                  </div>
                  <div style={{ padding: "2rem" }}>
                    <Image src={src3} alt="" />
                  </div>
                </Carousel>
              </ImageContainer>
              <DescriptionWrapper>
                <Heading>{heading}</Heading>
                <Info>{info}</Info>
                <Heading>Tech Stacks</Heading>
                <TechWrapper>
                  {tech.map((stack, i) => {
                    return (
                      <Tech key={i}>
                        {<stack.icon />}
                        {stack.title}
                      </Tech>
                    );
                  })}
                </TechWrapper>
                {/* <DemoWrapper>
                  <Demo
                    onClick={() => {
                      onOpenModal();
                      setModalVal(proj);
                    }}
                  >
                    Watch Demo
                  </Demo>
                  <DemoVideo>
                    <div>
                      <Modal
                        open={open}
                        onClose={onCloseModal}
                        closeIcon={closeIcon}
                        center
                      >
                        <div style={{ padding: "1rem 0" }}>
                          <div>{modalVal.heading}</div>
                          <div>{modalVal.info}</div>
                        </div>
                      </Modal>
                    </div>
                  </DemoVideo>
                </DemoWrapper> */}
                <ButtonWrapper>
                  <Deploy href={deployL} target="_blank" rel="noreferr">
                    Go Live
                  </Deploy>
                  <Github href={gitL} target="_blank" rel="noreferr">
                    Github
                  </Github>
                </ButtonWrapper>
              </DescriptionWrapper>
            </ProjectCard>
          );
        })}
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Project;
