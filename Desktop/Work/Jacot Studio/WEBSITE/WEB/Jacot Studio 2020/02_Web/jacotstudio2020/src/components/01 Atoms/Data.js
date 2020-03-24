import React from "react";

import {colorsRoles, gradient} from "./colors";
import {images, imagesProjects} from "./images";

const WrapTextDesign = (
    <>
        UX/UI
        <br />
        Designer
    </>
);
const WrapTextFront = (
    <>
        Creative
        <br />
        Developper
    </>
);
const WrapTextRetouch = (
    <>
        Photo
        <br />
        Retoucher
    </>
);

const Disciplines =  [
    {
        titleNav: WrapTextDesign,
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand01,
        mainGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        pathName:"/uiux-designer",
        projectsPage: [
            {
                mainTitle: "UX/UI Designer",
                srcMainImg: images.Parrot,
                mainColor: colorsRoles.Brand01,
                description: "Forget Ebay and other forms of ... description",
                favouriteMethodo: [
                    {
                        methodoTitle: "Sketch",
                        methodImage: images.Sketch,
                    },
                    {
                        methodoTitle: "Sass",
                        methodImage: images.Sass,
                    }
                ],
                projects: [
                    {
                        title: "Evergreen",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                    {
                        title: "Evergreen 2",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                ]
            }
        ]

    },
    {
        titleNav: WrapTextFront,
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand02,
        mainGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        pathName:"/creative-developer",
        projectsPage: [
            {
                mainTitle: "UX/UI Designer",
                description: "Forget Ebay and other forms of ... description",
                favouriteMethodo: [
                    {
                        methodoTitle: "Sketch",
                        methodImage: images.Sketch,
                    },
                    {
                        methodoTitle: "Sass",
                        methodImage: images.Sass,
                    }
                ],
                projects: [
                    {
                        title: "Evergreen",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                    {
                        title: "Evergreen 2",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                ]
            }
        ]

    },
    {
        titleNav: WrapTextRetouch,
        quote: "Lorem ipsum UX/UI Designer ezifz iugef zieg fzieg",
        altMainImg: "Parrot",
        srcMainImg: images.Parrot,
        mainColor: colorsRoles.Brand01,
        mainGradient: gradient.Brand0130,
        labelCTA: "Learn more",
        pathName:"/photo-retoucher",
        projectsPage: [
            {
                mainTitle: "UX/UI Designer",
                description: "Forget Ebay and other forms of ... description",
                favouriteMethodo: [
                    {
                        methodoTitle: "Sketch",
                        methodImage: images.Sketch,
                    },
                    {
                        methodoTitle: "Sass",
                        methodImage: images.Sass,
                    }
                ],
                projects: [
                    {
                        title: "Evergreen",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                    {
                        title: "Evergreen 2",
                        description: "Evergreen is a great project",
                        mainColor: colorsRoles.Brand03,
                        mainImage: imagesProjects.MacBook,
                        parralaxImage: imagesProjects.Leaves,
                        projectDetails:
                            {
                                title: "Evergreen title",
                                role: "Frontend",
                                overview: "this is the overview",
                                team: "Alphonse, Robert",
                                favouriteMethodo: [
                                    {
                                        methodoTitle: "Sketch",
                                        methodImage: images.Sketch,
                                    },
                                    {
                                        methodoTitle: "Sass",
                                        methodImage: images.Sass,
                                    }
                                ],
                                images: [
                                    {
                                        title:"Evergreen image01",
                                        srcImage:imagesProjects.Leaves
                                    },
                                    {
                                        title:"Evergreen image02",
                                        srcImage:imagesProjects.Leaves
                                    }
                                ]
                            }
                    },
                ]
            }
        ]

    },


]

export default Disciplines;