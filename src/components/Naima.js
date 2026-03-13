import React, { useState, useEffect, useRef } from "react"
import Fade from "./animations/Fade"
import { Carousel } from "react-bootstrap"
import { useLanguage } from "../contexts/LanguageContext"
import data, { getText } from "../data"
import "../styles/Naima.scss"

const Naima = () => {
  const { language } = useLanguage()
  const [activeIndex, setActiveIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const videoRefs = useRef({})

  // Enhanced mobile and iOS detection
  useEffect(() => {
    const checkDevice = () => {
      try {
        const mobile = window.innerWidth <= 768
        const ios = /iPad|iPhone|iPod/.test(navigator.userAgent)
        const isSafari = /^((?!chrome|android).)*safari/i.test(
          navigator.userAgent,
        )

        setIsMobile(mobile)
        setIsIOS(ios)

        // Log device info for debugging
        if (ios) {
          console.log("iPhone detected - applying performance optimizations")
        }
        if (isSafari) {
          console.log("Safari detected - MP4 videos should work well")
        }
      } catch (error) {
        console.warn("Error in device detection:", error)
      }
    }

    try {
      checkDevice()
      window.addEventListener("resize", checkDevice)
    } catch (error) {
      console.warn("Error setting up device detection:", error)
    }

    return () => {
      try {
        window.removeEventListener("resize", checkDevice)
      } catch (error) {
        console.warn("Error removing resize listener:", error)
      }
    }
  }, [])

  // Get carousel items from data with translated content
  const carouselItems = [
    {
      media: "https://www.youtube.com/embed/AzveR36lCBI",
      type: "iframe",
      title: {
        en: "Naima Autonomous Vehicle Project",
        ar: "مشروع نعيمة للمركبات ذاتية القيادة",
      },
      subtitle: {
        en: "Building autonomous mobility with ROS 2",
        ar: "بناء نظام قيادة ذاتية باستخدام ROS 2",
      },
      description: {
        en: "Autonomous vehicle framework with ZED 2 stereo camera integration, UBLOX GPS, Nav2 navigation, and SLAM capabilities for real-time autonomous navigation.",
        ar: "إطار عمل المركبة ذاتية القيادة مع تكامل كاميرا ZED 2 وGPS وقدرات التخطيط والملاحة.",
      },
    },
  ].map(item => ({
    ...item,
    title: getText(item.title, language),
    description: getText(item.description, language),
  }))

  // Handle carousel selection with video preloading
  const handleCarouselSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex)

    // Handle video playback
    const currentVideo = videoRefs.current[selectedIndex]
    if (currentVideo && currentVideo.tagName === "VIDEO") {
      try {
        currentVideo.play().catch(error => {
          console.warn(`Could not autoplay video ${selectedIndex}:`, error)
        })
      } catch (error) {
        console.warn(`Error playing video ${selectedIndex}:`, error)
      }
    }

    // Pause other videos
    Object.keys(videoRefs.current).forEach(index => {
      const video = videoRefs.current[index]
      if (
        video &&
        video.tagName === "VIDEO" &&
        parseInt(index) !== selectedIndex
      ) {
        try {
          video.pause()
        } catch (error) {
          console.warn(`Error pausing video ${index}:`, error)
        }
      }
    })
  }

  // Handle video load events
  const handleVideoLoad = index => {
    if (isIOS) {
      console.log(`iPhone: Video ${index} loaded successfully`)
    }
  }

  return (
    <div className="section" id="naima">
      <div className="container">
        <Fade bottom cascade distance="20px">
          <h1>{getText(data.sections.naima, language)}</h1>
          <h3>{getText(data.naimaTime, language)}</h3>
        </Fade>

        <div className="Naima-section">
          <div className="carousel-container">
            <Carousel
              className="naima-carousel"
              activeIndex={activeIndex}
              onSelect={handleCarouselSelect}
              interval={isIOS ? 5000 : 3000} // Back to 5 seconds for iPhone
              touch={true}
              indicators={!isMobile} // Hide indicators on mobile
              controls={true}
              slide={true}
              wrap={true}
              keyboard={false}
              variant="dark"
            >
              {carouselItems.map((item, index) => (
                <Carousel.Item key={index}>
                  {item.type === "iframe" ? (
                    <div className="video-container">
                      <iframe
                        width="100%"
                        height="500"
                        src={item.media}
                        title="Naima ROS2 Autonomous Vehicle Project"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ) : item.type === "video" ? (
                    <video
                      ref={el => {
                        try {
                          videoRefs.current[index] = el
                        } catch (error) {
                          console.warn(
                            `Error setting video ref for index ${index}:`,
                            error,
                          )
                        }
                      }}
                      className="d-block w-100"
                      src={item.media}
                      autoPlay={index === 0}
                      muted
                      loop
                      playsInline
                      preload="auto"
                      loading="eager"
                      disablePictureInPicture
                      controlsList="nodownload"
                      style={{
                        WebkitTransform: "translateZ(0)",
                        transform: "translateZ(0)",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden",
                        willChange: "transform",
                      }}
                      onLoadedData={() => {
                        try {
                          handleVideoLoad(index)
                        } catch (error) {
                          console.warn(
                            `Error in handleVideoLoad for index ${index}:`,
                            error,
                          )
                        }
                      }}
                      onError={e => {
                        try {
                          console.error(`Video ${index} failed to load:`, e)
                        } catch (error) {
                          console.warn(
                            `Error in video error handler for index ${index}:`,
                            error,
                          )
                        }
                      }}
                    />
                  ) : (
                    <img
                      className="d-block w-100"
                      src={item.media}
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                  <Carousel.Caption
                    className={`carousel-caption ${isMobile ? "mobile-caption" : ""}`}
                  >
                    <h3>{item.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div className="content">
            {data.naimaExperience.map((exp, index) => (
              <Fade bottom distance="20px" key={index}>
                <p>{getText(exp, language)}</p>
              </Fade>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Naima
