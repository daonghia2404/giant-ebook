window.onload = () => {
  tabEvent.init();
  owlCarousel.init();
  category.init();
  readingPage.init();
  seeMore.init();
  bookDetail.init();
  customSelect2.init();
  customAudio.init();
  bookAction.init();
  setupTooltip.init();
};

const tabEvent = {
  init: function () {
    this.setupTabEvent();
  },
  setupTabEvent: function () {
    const main = document.querySelectorAll(".tab-wrapper");
    if (main.length !== 0) {
      main.forEach((mainTarget) => {
        const tabClick = mainTarget.querySelectorAll(".tabs-group .tab-item");
        const tabMain = mainTarget.querySelectorAll(
          ".tabs-main-group .tab-item"
        );

        tabClick.forEach((item, index) =>
          item.addEventListener("click", () => {
            tabClick.forEach((i) => i.classList.remove("active"));
            tabMain.forEach((i) => i.classList.remove("active"));

            tabClick[index].classList.add("active");
            tabMain[index].classList.add("active");
            let btnWrap = $(".btn-readmore");
            btnWrap.attr("data-tab", tabMain[index].getAttribute("data-tab"));
          })
        );
      });
    }
  },
};

const owlCarousel = {
  init: function () {
    this.setupListVideoCarousel();
    this.setupListBookCarousel();
    this.setupBannerCarousel();
  },
  setupListVideoCarousel: function () {
    const $owl = $("#list-video__box.owl-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1.5,
        },
        575: {
          items: 3.5,
        },
      },
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: true,
      dots: false,
      navText: [
        "<img src='./assets/icons/icon-angle-left-white.svg'>",
        "<img src='./assets/icons/icon-angle-right-white.svg'>",
      ],
      autoWidth: false,
      margin: 30,
    });
    $owl.trigger("refresh.owl.carousel");
  },
  setupListBookCarousel: function () {
    let loop = false
    if (window.innerWidth > 768) loop = false
    else loop = true
    var $owl = $("#list-book__box.owl-carousel").owlCarousel({
      responsive: {
        0: {
          items: 2.2,
        },
        768: {
          items: 5,
        },
      },
      loop,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      dots: false,
      navText: [
        "<img src='./assets/icons/icon-angle-left-white.svg'>",
        "<img src='./assets/icons/icon-angle-right-white.svg'>",
      ],
      nav: true,
      autoWidth: false,
      margin: 0,
    });
    $owl.trigger("refresh.owl.carousel");
  },
  setupBannerCarousel: function () {
    var $owl = $("#banner-carousel").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
      },
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: true,
      dots: true,
      navText: [
        "<img src='./assets/icons/icon-angle-left-blue.svg'>",
        "<img src='./assets/icons/icon-angle-right-blue.svg'>",
      ],
    });
    $owl.trigger("refresh.owl.carousel");
  },
};

const category = {
  init: function () {
    this.configEventExpand();
    this.openCloseCategory();
    this.openCloseAccountSidebar();
    this.selectOptions();
  },
  configEventExpand: function () {
    const main = document.querySelectorAll("section.section-category");
    main.forEach((item, index) => {
      const allLists = item.querySelectorAll(".category-item");
      allLists.forEach((target) =>
        target.addEventListener("click", () => {
          target.classList.toggle("active");
        })
      );
    })
  },
  openCloseCategory: function () {
    const body = document.querySelector('body')
    const main = document.querySelector(".section-category-mobile");
    const btnOpen = document.querySelector(".header-mobile .js-open-category");
    const mainAccount = document.querySelector(".section-account-sidebar-mobile");

    if (main && btnOpen) {
      const overlay = main.querySelector(".category-overlay");
      const btnClose = main.querySelector(".category-close");

      btnOpen.addEventListener("click", () => {
        body.style.overflow = 'hidden'
        main.classList.add("active");
        if (mainAccount) mainAccount.classList.remove('active')
      });
      overlay.addEventListener("click", () => {
        body.style.overflow = 'auto'
        main.classList.remove("active");
      });
      btnClose.addEventListener("click", () => {
        body.style.overflow = 'auto'
        main.classList.remove("active");
      });
    }
  },
  openCloseAccountSidebar: function () {
    const body = document.querySelector('body')
    const main = document.querySelector(".section-account-sidebar-mobile");
    const btnOpen = document.querySelector(".header-mobile .js-open-account-sidebar");
    const mainCategory = document.querySelector(".section-category-mobile");

    if (main && btnOpen) {
      const overlay = main.querySelector(".category-overlay");
      const btnClose = main.querySelector(".category-close");

      btnOpen.addEventListener("click", () => {
        body.style.overflow = 'hidden'
        main.classList.add("active");
        if (mainCategory) mainCategory.classList.remove('active')
      });
      overlay.addEventListener("click", () => {
        body.style.overflow = 'auto'
        main.classList.remove("active");
      });
      btnClose.addEventListener("click", () => {
        body.style.overflow = 'auto'
        main.classList.remove("active");
      });
    }
  },
  selectOptions: function () {
    const allSectionOption = document.querySelectorAll(
      ".category-filter .list-select"
    );
    allSectionOption.forEach((item) => {
      const allOptions = item.querySelectorAll(".button-component");
      allOptions.forEach((btn, btnIndex) =>
        btn.addEventListener("click", () => {
          allOptions.forEach((ele, indexEle) => {
            if (indexEle !== btnIndex) ele.classList.remove("active");
          });
          btn.classList.toggle("active");
        })
      );
    });
  },
};

const readingPage = {
  init: function () {
    this.sidebarConfig();
  },
  sidebarConfig: function () {
    const main = document.querySelector("body.reading-wrapper");
    if (main) {
      const btnOpen = main.querySelector(".header-btn-sidebar");
      const btnIconOpen = "./assets/icons/icon-list-video-blue.svg";
      const btnIconClose = "./assets/icons/icon-arrow-left-gray.svg";

      btnOpen.addEventListener("click", () => {
        main.classList.toggle("open-sidebar");
        const img = btnOpen.querySelector("img");
        if (main.className.includes("open-sidebar")) {
          img.src = btnIconClose;
          img.style.width = "18px";
          img.style.transform = "translateY(0px)";
        } else {
          img.src = btnIconOpen;
          img.style.width = "20px";
          img.style.transform = "translateY(1px)";
        }
      });
    }
  },
};

const seeMore = {
  init() {
    this.config();
  },
  config() {
    const main = document.querySelectorAll('.see-more-wrapper')
    main.forEach((item, index) => {
      const btnSeeMore = item.querySelector('.see-more-btn')
      btnSeeMore.addEventListener('click', () => {
        item.classList.toggle('see-more-expand')
        const textBtn = btnSeeMore.querySelector('span')
        const imgBtn = btnSeeMore.querySelector('img')
        if (item.className.includes('see-more-expand')) {
          textBtn.innerHTML = 'Thu gọn'
          imgBtn.src = './assets/icons/icon-angle-up-blue.svg'
        } else {
          textBtn.innerHTML = 'Xem thêm'
          imgBtn.src = './assets/icons/icon-angle-down-blue.svg'
        }
      })
    })
  },
};


const bookDetail = {
  init: function () {
    this.configBookVideo()
    this.configOpenCloseListVideoMobile()
    this.configBookAudio()
    this.configBookVideoList()
  },
  configOpenCloseListVideoMobile: function () {
    const btn = document.querySelector('.list-video-header-mobile')
    const main = document.querySelector('.list-video-mobile')

    if (btn && main) {
      btn.addEventListener('click', () => {
        main.classList.toggle('active')
      })
    }
  },
  configBookVideo: function () {
    const player = new Plyr('#book-video-player');
  },
  configBookAudio: function () {
    const player = new Plyr('#book-audio-player')
  },
  configBookVideoList: function () {
    const $owl = $("#list-video__list.owl-carousel").owlCarousel({
      responsive: {
        0: {
          items: 3.5,
        },
      },
      loop: true,
      rewind: false,
      mouseDrag: true,
      nav: true,
      dots: false,
      navText: [
        "<img src='./assets/icons/icon-angle-left-white.svg'>",
        "<img src='./assets/icons/icon-angle-right-white.svg'>",
      ],
      autoWidth: false,
      margin: 30,
    });
    $owl.trigger("refresh.owl.carousel");
  },
}

const customSelect2 = {
  init: function () {
    this.select2MultilpleFilter();
    this.selectSearchBar();
  },
  select2MultilpleFilter: function () {
    $(".select-multilple-filter .mySelect2").select2({
      data: [],
      placeholder: "Tìm đối tác theo tên",
      dropdownPosition: "below",
      closeOnSelect: false,
      tags: true,
    });
  },
  selectSearchBar: function() {
    const searchMain = document.querySelector('header .header-search .search-filter')
    if (searchMain) {
      const searchSelected = searchMain.querySelector('.dropdown-toggle')
      const searchSelect = searchMain.querySelector('select')
      const searchOptions = searchMain.querySelectorAll('.dropdown-menu .dropdown-item')
      searchOptions.forEach((item, index) => item.addEventListener('click', () => {
        const value = item.dataset.selectvalue
        searchSelect.value = value
        let selectedDom = item.querySelector('.button-component').children
        searchSelected.innerHTML = ''
        selectedDom = [...selectedDom]
        selectedDom.forEach((dom) => {
          const domValue = dom.cloneNode(true)
          searchSelected.appendChild(domValue)
        })
      }))
    }
  }
};

const customAudio = {
  init: function () {
    this.config()
  },
  config: function () {
    const main = document.querySelector('#js-custom-audio-player')
    if (main) {
      let audioPlayer = main.querySelector('.audio-current')

      const audioTitle = main.querySelector('.audio-title')
      const audioAuthor = main.querySelector('.audio-des span')
      const audioImage = document.querySelector('.section-book-detail-image img')

      const audioCurrentTime = main.querySelector('.audio-current-time')
      const audioTotalTime = main.querySelector('.audio-total-time')

      let isAudioProcessSlide = false
      rangesliderJs.create($('.range-slider-input.audio-process'), {
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        // callbacks
        onInit: (value, percent, position) => {},
        onSlideStart: (value, percent, position) => {},
        onSlide: (value, percent, position) => {
          isAudioProcessSlide = true
        },
        onSlideEnd: (value, percent, position) => {
          setAudioLoading(true)
          isAudioProcessSlide = false
          audioPlayer.currentTime = value
          playAudio()
        }
      })
      const audioProcessDOM = document.querySelector('.range-slider-input.audio-process')
      const audioProcess = audioProcessDOM['rangeslider-js']

      const audioIconVolume = main.querySelector('.audio-volume-wrapper svg')
      let isVolumeProcessSlide = false
      rangesliderJs.create($('.range-slider-input.audio-volume'), {
        min: 0,
        max: 100,
        value: 100,
        step: 1,
        // callbacks
        onInit: (value, percent, position) => {},
        onSlideStart: (value, percent, position) => {},
        onSlide: (value, percent, position) => {
          isVolumeProcessSlide = true
          if (value === 0) {
            audioIconVolume.parentNode.classList.add('mute')
          } else {
            audioIconVolume.parentNode.classList.remove('mute')
          }
          audioPlayer.volume = value / 100
        },
        onSlideEnd: (value, percent, position) => {
          isVolumeProcessSlide = false
          if (value === 0) {
            audioIconVolume.parentNode.classList.add('mute')
          } else {
            audioIconVolume.parentNode.classList.remove('mute')
          }
          audioPlayer.volume = value / 100
        }
      })
      const volumeDOM = document.querySelector('.range-slider-input.audio-volume')
      const volumeProcess = volumeDOM['rangeslider-js']

      
      const audioPrevBtn = main.querySelector('.audio-prev')
      const audioPlayBtn = main.querySelector('.audio-play')
      const audioNextBtn = main.querySelector('.audio-next')
      const audioLoopBtn = main.querySelector('.audio-repeat')
      const audioShuffleBtn = main.querySelector('.audio-shuffle')
      
      const audioPlaybackRate = main.querySelectorAll('.audio-time-skip .dropdown-item')

      const audioBarList = main.querySelector('.audio-bar')
      const audioListsItem = document.querySelector('.audio-detail-lists')

      audioBarList.addEventListener('click', () => {
        audioBarList.classList.toggle('active')
        audioListsItem.classList.toggle('active')
      })

      const audioLoading = main.querySelector('.audio-loading')
      const setAudioLoading = (isLoading) => {
        if (isLoading) audioLoading.classList.add('loading')
        else audioLoading.classList.remove('loading')
      }

      let isAudioShuffle = false
      let isAudioLoop = false
      let oldValueAudio = 100

      const formatTime = (seconds) => {
        if (seconds === 0 || !seconds) return '00:00:00'
        return new Date(seconds * 1000).toISOString().substr(11, 8)
      }

      // const getDuration = (src, cb) => {
      //   var audio = new Audio()
      //   $(audio).on("loadedmetadata", function () {
      //     cb(audio.duration)
      //   })
      //   audio.src = src
      // }

      let currentListIndex = 0
      const audioLists = document.querySelectorAll('.audio-detail-lists .audio__list-item')
      // audioLists.forEach((item, index) => {
      //   const audioSrc = item.dataset.audioSrc
      //   getDuration(audioSrc, (duration) => {
      //     item.querySelector('.item__timer').innerHTML = formatTime(duration)
      //   })
      // })
      audioLists.forEach((item, index) => item.addEventListener('click', () => {
        audioLists.forEach(i => i.classList.remove('active'))
        item.classList.add('active')

        currentListIndex = index
        const audioSrc = item.dataset.audioSrc
        const audioTitle = item.dataset.audioTitle
        const audioAuthor = item.dataset.audioAuthor
        const audioImage = item.dataset.audioImage

        changeAudio(audioImage, audioTitle, audioAuthor, audioSrc)
      }))

      const getShuffleAudio = () => {
        const index = Math.floor(Math.random() * audioLists.length)
        if (index === currentListIndex || !audioLists[index]) {
          getShuffleAudio()
        } else {
          currentListIndex = index
          renderAudio()
        }
      }

      const renderAudio = () => {
        audioLists.forEach(i => i.classList.remove('active'))
        audioLists[currentListIndex].classList.add('active')

        const audioSrc = audioLists[currentListIndex].dataset.audioSrc
        const audioTitle = audioLists[currentListIndex].dataset.audioTitle
        const audioAuthor = audioLists[currentListIndex].dataset.audioAuthor
        const audioImage = audioLists[currentListIndex].dataset.audioImage

        changeAudio(audioImage, audioTitle, audioAuthor, audioSrc)
      }

      const initAudio = () => {
        audioPlayer.currentTime = 0
        audioProcess.update({ min: 0, max: audioPlayer.duration, value: 0 })
        audioCurrentTime.innerHTML = formatTime(0)
        audioTotalTime.innerHTML = formatTime(audioPlayer.duration)
      }

      const mounted = async () => {
        let isMounted = true
        const audioSrc = audioLists[currentListIndex].dataset.audioSrc
        const audioTitle = audioLists[currentListIndex].dataset.audioTitle
        const audioAuthor = audioLists[currentListIndex].dataset.audioAuthor
        const audioImage = audioLists[currentListIndex].dataset.audioImage

        setAudioLoading(true)
        const res = await fetch(audioSrc)
        if (res.status === 200) {
          audioPlayer.querySelector('source').src = audioSrc
          audioTitle.innerHTML = audioTitle
          audioAuthor.innerHTML = audioAuthor
          audioImage.src = audioImage

          audioPlayer.addEventListener('loadeddata', () => {
            if (isMounted) {
              pauseAudio()
              setAudioLoading(false)
              initAudio()
              isMounted = false  
            }
          })
          playAudio(true)
        }
      }

      const updateAudio = () => {
        if (!isAudioProcessSlide) audioProcess.update({ value: audioPlayer.currentTime })
        audioCurrentTime.innerHTML = formatTime(audioPlayer.currentTime)
        audioTotalTime.innerHTML = formatTime(audioPlayer.duration)
      }
      

      const changeAudio = async (image, title, author, src) => {
        audioPlayer.pause()
        setAudioLoading(true)
        const res = await fetch(src)
        if (res.status === 200) {
          audioPlayer.querySelector('source').src = src
          audioTitle.innerHTML = title
          audioAuthor.innerHTML = author
          audioImage.src = image

          audioPlayer.addEventListener('loadeddata', () => {
            setAudioLoading(false)
            initAudio()
          })
          playAudio(true)
        }
      }

      audioPlayer.addEventListener('canplay', (e) => {
        setAudioLoading(false)
      })

      const nextAudio = () => {
        currentListIndex++
        if (audioLists[currentListIndex]) {
          renderAudio()
        } else {
          currentListIndex = audioLists.length
        }
      }

      const prevAudio = () => {
        currentListIndex--
        if (audioLists[currentListIndex]) {
          renderAudio()
        } else {
          currentListIndex = 0
        }
      }

      const playAudio = (isLoad) => {
        audioPlayBtn.classList.add('active')
        if (isLoad) audioPlayer.load()
        audioPlayer.play()
      }
      const pauseAudio = () => {
        audioPlayBtn.classList.remove('active')
        audioPlayer.pause()
      }

      audioPlayer.addEventListener('timeupdate', (e) => {
        updateAudio()
      })
      audioPlayer.addEventListener('ended', () => {
        audioPlayBtn.classList.remove('active')

        if (isAudioShuffle) {
          getShuffleAudio()
        } else if (isAudioLoop) {
          renderAudio()
        } else {
          nextAudio()
        }
      })

      audioPlayBtn.addEventListener('click', () => {
        audioPlayBtn.classList.toggle('active')
        if (audioPlayBtn.className.includes('active')) {
          playAudio()
        } else {
          pauseAudio()
        }
      })
      audioNextBtn.addEventListener('click', () => {
        if (isAudioShuffle) getShuffleAudio()
        else nextAudio()
      })
      audioPrevBtn.addEventListener('click', () => {
        prevAudio()
      })
      audioLoopBtn.addEventListener('click', () => {
        audioLoopBtn.classList.toggle('active')
        if (audioLoopBtn.className.includes('active')) {
          isAudioLoop = true
        } else {
          isAudioLoop = false
        }
      })
      audioShuffleBtn.addEventListener('click', () => {
        audioShuffleBtn.classList.toggle('active')
        if (audioShuffleBtn.className.includes('active')) {
          isAudioShuffle = true
        } else {
          isAudioShuffle = false
        }
      })

      audioIconVolume.addEventListener('click', () => {
        audioIconVolume.parentNode.classList.toggle('mute')
        if (audioIconVolume.parentNode.className.includes('mute')) {
          oldValueAudio = volumeProcess.value
          volumeProcess.update({ value: 0 })
          audioPlayer.volume = 0
        } else {
          volumeProcess.update({ value: oldValueAudio })
          audioPlayer.volume = oldValueAudio / 100
        }
      })

      audioPlaybackRate.forEach((item, index) => item.addEventListener('click', () => {
        audioPlaybackRate.forEach(i => i.classList.remove('active'))
        item.classList.add('active')
        audioPlayer.playbackRate = Number(item.dataset.playbackRate)
      }))

      mounted()
    }
  },
}


const bookAction = {
  init: function() {
    this.config()
  },
  config: function() {
    const mains = document.querySelectorAll('.section-book-detail-action')
    mains.forEach((main) => {
      const heartBtn = main.querySelector('.action-item.love')
      const shareBtn = main.querySelector('.action-item.share')
      const pinteresttBtn = main.querySelector('.action-item.pinterest')

      const checkActiveBtn = (item) => {
        item.classList.toggle('active')
      }

      heartBtn.addEventListener('click', () => checkActiveBtn(heartBtn))
      shareBtn.addEventListener('click', () => checkActiveBtn(shareBtn))
      pinteresttBtn.addEventListener('click', () => checkActiveBtn(pinteresttBtn))
    })
  },
}


const setupTooltip = {
  init: function() {
    this.config()
  },
  config: function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
  }
}
