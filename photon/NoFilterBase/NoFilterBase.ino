#include "application.h"
#include "neopixel.h"

SYSTEM_MODE(AUTOMATIC);

#define PIXEL_PIN D2
#define PIXEL_COUNT 150
#define PIXEL_TYPE WS2812B

String currentFilter;

Adafruit_NeoPixel strip = Adafruit_NeoPixel(PIXEL_COUNT, PIXEL_PIN, PIXEL_TYPE);

// Returns the Red component of a 32-bit color
uint8_t Red(uint32_t color)
{
  return (color >> 16) & 0xFF;
}


// Returns the Green component of a 32-bit color
uint8_t Green(uint32_t color)
{
  return (color >> 8) & 0xFF;
}


// Returns the Blue component of a 32-bit color
uint8_t Blue(uint32_t color)
{
  return color & 0xFF;
}


void setup()
{
  strip.setBrightness(100);
  strip.begin();
  strip.show();
  Particle.function("brightness", brightnessCommand);
  Particle.function("filter", filterCommand);
}


void loop()
{
}


// Sets the led strip to the predefined filter.
int filterCommand(String filter)
{
  currentFilter = filter;
  if (filter == "whimsy") {
    alternateColorFilter(strip.Color(85, 235, 240), strip.Color(168, 85, 241));
    return 1;
  }else if (filter == "uprising") {
    transitionColorFilter(strip.Color(233, 91, 30), strip.Color(213, 0, 0));
    return 1;
  }else if (filter == "evolve") {
    transitionColorFilter(strip.Color(0, 255, 179), strip.Color(0, 0, 255));
    return 1;
  }else if (filter == "zeal") {
    alternateColorFilter(strip.Color(170, 0, 255), strip.Color(245, 0, 87));
    return 1;
  }else if (filter == "threshold") {
    transitionColorFilter(strip.Color(213, 0, 0), strip.Color(230, 81, 0), strip.Color(255, 214, 0));
    return 1;
  }else if (filter == "nostalgic") {
    transitionColorFilter(strip.Color(103, 58, 183), strip.Color(233, 30, 99), strip.Color(103, 58, 183));
    return 1;
  }
  return -1;
}


// Sets the brightness of the LED strip. Valid values [0,100].
int brightnessCommand(String command)
{
  int level = command.toInt();
  if (level >= 0 && level <= 100) {
    strip.setBrightness(level);
    return filterCommand(currentFilter);
  }

  // Invalid command
  return -1;
}


// Alternates each light of the LED strip with the provided colors.
void alternateColorFilter(uint32_t a, uint32_t b)
{
  for (int i = 0; i < strip.numPixels(); i++) {
    if (i % 2 == 0) {
      strip.setPixelColor(i, a);
    }else {
      strip.setPixelColor(i, b);
    }
  }
  strip.show();
}


// Evenly fades colors from a to b along the LED strip.
void transitionColorFilter(uint32_t a, uint32_t b)
{
  transitionColors(a, b, 0, PIXEL_COUNT);
  strip.show();
}


// Evenly fades colors from a to b to c along the LED strip.
void transitionColorFilter(uint32_t a, uint32_t b, uint32_t c)
{
  transitionColors(a, b, 0, PIXEL_COUNT / 2);
  transitionColors(b, c, PIXEL_COUNT / 2, PIXEL_COUNT / 2);
  strip.show();
}


// Evenly fades colors from a to b at LED start index in the provided steps.
void transitionColors(uint32_t a, uint32_t b, int start, int steps)
{
  for (int i = 0; i < steps; i++) {
    uint8_t red = ((Red(a) * (steps - i)) + (Red(b) * i)) / steps;
    uint8_t green = ((Green(a) * (steps - i)) + (Green(b) * i)) / steps;
    uint8_t blue = ((Blue(a) * (steps - i)) + (Blue(b) * i)) / steps;
    strip.setPixelColor(i + start, strip.Color(red, green, blue));
  }
}


