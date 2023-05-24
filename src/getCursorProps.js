export default function getCursorProps(bannerElements, mousePosition) {
  if (Object.keys(bannerElements).length !== 0 && mousePosition) {
    let websites = bannerElements.websites.current.getBoundingClientRect();
    let apps = bannerElements.apps.current.getBoundingClientRect();
    let branding = bannerElements.branding.current.getBoundingClientRect();

    let scrollY = window.pageYOffset;

    let websites_xmin = websites.x;
    let websites_xmax = websites.x + websites.width;
    let websites_ymin = websites.y + scrollY;
    let websites_ymax = websites.y + websites.height + scrollY;
    let apps_xmax = apps.x + apps.width;
    let branding_xmax = branding.x + branding.width;
    let mouse_x = mousePosition.x;
    let mouse_y = mousePosition.y;

    let cursorprops = {
      videoID: null,
      scale: 1
    };
    if (
      websites_xmin < mouse_x &&
      mouse_x < branding_xmax &&
      websites_ymin - 300 < mouse_y &&
      mouse_y < websites_ymax + 300
    ) {
      if (mouse_x < websites_xmax) {
        cursorprops.videoID = "websites";
      } else if (mouse_x < apps_xmax) {
        cursorprops.videoID = "apps";
      } else {
        cursorprops.videoID = "branding";
      }
      if (mouse_y > websites_ymin && mouse_y < websites_ymax) {
        cursorprops.scale = 20;
      } else {
        cursorprops.scale = 10;
      }
    }
    return cursorprops;
  }
}
