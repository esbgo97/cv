import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

export default function Portfolio() {
  return (
    <Card>
      <CardContent>
        <Typography variant="h4" color="primary.main">
          Portfolio
        </Typography>

        <ImageList>
          {itemData.map((item) => (
            <ImageListItem key={item.img} style={{ cursor: "pointer" }}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>{item.author}</span>}
                position="bottom"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </CardContent>
    </Card>
  );
}

const itemData = [
  {
    img: "https://dev-to-uploads.s3.amazonaws.com/i/grki97glctbmjydzqejw.png",
    title: "WEB: Personal Blog",
    author: "React, Push Notification, Firebase",
  },
  {
    img: "https://www.programaenlinea.net/wp-content/uploads/2020/07/net-1.png",
    title: "API: External API with Swagger Docs",
    author: ".NET Core, Swagger, PostgreSQL",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1358/0*wuNf24urnMp7ypDp.png",
    title: "WEB: Movies App Demo",
    author: "Javascript, Angular, Node",
  },
  {
    img: "https://www.sngular.com/wp-content/uploads/2022/04/Flutter-Blog.png",
    title: "Cross Platform App: Personal Manager",
    author: "Flutter, Firebase, Android Studio",
  },
  {
    img: "https://miro.medium.com/v2/resize:fit:1400/1*m0H6-tUbW6grMlezlb52yw.png",
    title: "ML - Flower Detector",
    author: "Python, NumPy, TensorFlow",
  },
  {
    img: "https://www.jrebel.com/sites/default/files/image/2021-01/what%20is%20kotlin%20banner%20image.png",
    title: "Android Native App: Personal Taxes",
    author: "Kotlin, Android Studio",
  },
];
