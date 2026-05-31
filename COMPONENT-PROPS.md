# @blimpify-im/ui prop cheatsheet

Quick reference for the components used in this site. Import from `@/lib/ui`.
For the full surface, see the `.d.ts` files under `node_modules/@blimpify-im/ui/dist/design/system/components/`.

**Restore IDE autocomplete:** Cmd+Shift+P → "TypeScript: Restart TS Server".

---

## Layout

### `<Section>`
Page-level wrapper. Owns vertical spacing.

```
spacing    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
height     'auto' | 'full' | 'screen' | '90vh' | '75vh' | '50vh' | 'media-half'
overflow   'visible' | 'hidden' | 'auto' | 'scroll' | 'clip'
position   'static' | 'relative' | 'sticky' | 'fixed' | 'absolute'
borderTop / borderBottom    boolean
borderWeight  'thin' | 'default' | 'thick'
paddingBottom  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'
noPaddingTop  boolean
id, as, style, sectionKey
```

### `<Container>`
Horizontal max-width wrapper.

```
width      'content' | 'media' | 'form' | 'navbar'
align      'left' | 'center' | 'right'        // moves the container
contentAlign  'left' | 'center' | 'right'     // aligns content inside it
height     'auto' | 'full' | 'fit'
spacing    'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
noPadding  boolean
as, id, style
```

### `<VStack>`
Vertical flex stack.

```
spacing    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
mobileSpacing  same scale
align      'start' | 'center' | 'end' | 'stretch'
justify    'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
split      boolean       // push last child to bottom
collapseSpacing  'mobile' | 'tablet' | 'never'
fullWidth  boolean
flexChild  boolean
```

### `<HStack>`
Horizontal flex stack.

```
spacing    'xs' | 'sm' | 'md' | 'lg' | 'xl'    // NOTE: no 'none' / '2xl' / '3xl' here
align      'start' | 'center' | 'end' | 'baseline' | 'stretch'
justify    'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
mobileAlign / mobileJustify  same scales
direction  'row' | 'row-reverse'
mobileDirection  'row' | 'row-reverse' | 'column' | 'column-reverse'
wrap       boolean
overflow   'auto' | 'hidden' | 'scroll' | 'visible'
```

### `<Grid>` + `<GridItem>`
CSS grid.

```
// Grid
columns       number  |  { base, sm, md, lg, xl, '2xl' }
colSpan       same (when nested)
gap           'xs' | 'sm' | 'md' | 'lg' | 'xl'
alignItems    'start' | 'center' | 'end' | 'stretch'
justifyItems  'start' | 'center' | 'end' | 'stretch'
cardDensity   'compact' | 'standard' | 'spacious'     // alt to columns
minItemWidth  string                                  // alt to columns
maxColumns    number

// GridItem  (NO 'order' prop — reorder children in JSX instead)
colSpan   number | { base, sm, md, lg, xl, '2xl' }
rowSpan   number
colStart / rowStart  number
height    'full' | 'auto'
alignSelf 'start' | 'center' | 'end' | 'stretch'
sticky    boolean
top       string | number
zIndex    number
```

### `<MasonryGrid>`
Uneven-height grid that staggers cards.

```
columns         number | { base, sm, md, lg, xl }
gap             'xs' | 'sm' | 'md' | 'lg' | 'xl'
maxItemsMobile  number          // built-in "show more" toggle
maxItemsTablet  number
showMoreLabel / showLessLabel   string
```

### `<Card>`
Bordered/filled content surface.

```
padding   'none' | 'xs' | 'sm' | 'md' | 'lg'     // NOTE: no 'xl' / '2xl'
radius    'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
variant   'outlined' | 'filled' | 'elevated' | ...   (check schema for full list)
```

### `<Box>`
Catch-all primitive. Use sparingly.

```
padding / margin / gap   'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
radius      'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
bg          'base' | 'card' | 'hover' | 'sidebar' | 'nav' | 'transparent'
border      'none' | 'light' | 'default' | 'heavy'
display     'component' | 'inline-component' | 'flex' | 'inline-flex' | 'grid' | 'inline-grid' | 'none'
direction   'row' | 'column' | 'row-reverse' | 'column-reverse'
align       'start' | 'center' | 'end' | 'stretch' | 'baseline'
justify     'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
width       'auto' | 'full' | 'fit' | 'screen'
height      'auto' | 'full' | 'fit' | 'screen'
grow        boolean    // push siblings via flex-grow inside a flex column
as, style, className
```

### `<Divider>`
```
orientation  'horizontal' | 'vertical'
weight       'thin' | 'default' | 'thick'
spacing      'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
```

---

## Typography

### `<Typography>`  (most flexible)
```
variant   'display-2xl' | 'display-xl' | 'display-lg' | 'display-md' | 'display-sm'
          | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
          | 'body-xl' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs'
          | 'label-lg' | 'label-md' | 'label-sm' | 'label-xs'
          | 'code-lg' | 'code-md' | 'code-sm'
weight    'light' | 'regular' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
color     'primary' | 'secondary' | 'tertiary' | 'disabled' | 'placeholder' | 'inverse'
          | 'heading' | 'body' | 'label' | 'accent' | 'brand'
          | 'success' | 'warning' | 'error' | 'info'
          | (many semantic tokens — full list in Typography.d.ts)
align     'left' | 'center' | 'right' | 'justify'
truncate / noWrap / uppercase / italic    boolean
as        any HTML/React element
preserveLineBreaks  boolean    // honor \n
```

### `<Heading level={1..6}>`
Sugar over Typography. Same color/weight/align props.

```
level     1 | 2 | 3 | 4 | 5 | 6
suffix    string             // text appended in serif suffixFont
suffixFont 'Lora' | 'Playfair Display' | 'Crimson Text' | 'Merriweather'
```

### `<Body>` / `<Label>` / `<Display>` / `<Code>`
Sugar with their own `size`:

```
Body:     size  'xl' | 'lg' | 'md' | 'sm' | 'xs'
Display:  size  'xl' | 'lg' | 'md' | 'sm'
Label:    size  'lg' | 'md' | 'sm' | 'xs'
Code:     size  'lg' | 'md' | 'sm'
```

### `<H1>..<H6>`
No-args sugar — use when you don't need to override defaults.

---

## Actions

### `<Button>`
```
variant   'brand' | 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline' | 'destructive'
          | 'secondary-glass' | 'ghost-glass' | 'accent-glass' | 'raised'
size      'sm' | 'md' | 'lg' | 'xl'
radius    'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
loading   boolean
fullWidth boolean
leftIcon / rightIcon  ReactNode (or string for JSON icons)
href      string         // renders as anchor
target    string
```

### `<IconButton>`
```
icon       ReactNode                 // required
aria-label string                    // required
variant    'primary' | 'secondary' | 'accent' | 'ghost' | 'destructive'
           | 'secondary-glass' | 'ghost-glass' | 'accent-glass' | 'raised'
size       'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
badge      number | string
selected   boolean
loading    boolean
tooltip    boolean
tooltipContent  ReactNode
tooltipPlacement / tooltipColor / tooltipSize / tooltipDelay
```

### `<TextLink>`
```
variant   'primary' | 'secondary' | 'accent' | 'ghost' | 'button-ghost' | 'brand' | 'inverse'
size      'sm' | 'md' | 'lg' | 'xl'
weight    'regular' | 'medium' | 'semibold' | 'bold'
underline 'none' | 'hover' | 'always'
leftIcon / rightIcon  ReactNode
href      string
disabled  boolean
```

---

## Forms

### `<Input>`
```
type     'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search'
variant  'flat' | 'bordered' | 'faded' | 'underlined' | 'page'
color    'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
size     'sm' | 'md' | 'lg'
radius   'sm' | 'md' | 'lg'
label / error / helper / description / placeholder   string
labelPlacement 'outside' | 'outside-left'
leftIcon / rightIcon / startContent / endContent  ReactNode
showPasswordToggle / isClearable / fullWidth      boolean
isInvalid / disableAnimation                      boolean
```

### `<Textarea>`
```
variant   'flat' | 'bordered' | 'faded' | 'underlined'
color     'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
size      'sm' | 'md' | 'lg'
labelPlacement 'outside' | 'outside-left'
resize    'none' | 'vertical' | 'horizontal' | 'both'
autoResize  boolean
minRows / maxRows / maxLength    number
showCharacterCount / isClearable / fullWidth / required  boolean
label / description / error / success    string
```

---

## Media

### `<Image>`
```
src        string                   // required
alt        string                   // required
width / height   number | string
objectFit  'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
objectPosition  string              // 'center' | 'top' | 'left right' | '50% 25%' etc.
radius     'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
loading    'lazy' | 'eager'
priority   boolean
aspectRatio  string                 // '16/9' | '4/3' | '1/1' (CSS aspect-ratio syntax)
hoverZoom  boolean
fallbackSrc  string
placeholderColor / lqip / blurHash   for loading placeholders
themeAdaptive  boolean
tint       'accent' | 'none'
tintStrength  number
```

### `<Logo>`
```
src        string
text       string         // text-only logos
href       string
width / height   number
color      'auto' | 'auto-inverse' | 'inverse' | 'brand'
display    'both' | 'logo' | 'text'
align      'start' | 'center' | 'end'
gap        'xs' | 'sm' | 'md' | 'lg' | 'xl'
hideTextOnMobile  boolean
textSize   'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
textWeight 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black'
textTransform  'none' | 'uppercase' | 'lowercase' | 'capitalize'
textSpacing    'normal' | 'tight' | 'wide' | 'wider' | 'widest'
textGradient   boolean
border     'none' | 'default' | 'subtle' | 'strong' | 'emphasis'
radius     'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
aspectRatio / objectPosition  string
loading 'eager' | 'lazy'  ·  priority  boolean
```

### `<Avatar>`
```
name       string         // for initials fallback
src        string
size       'full' | '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl'
variant    'solid' | 'subtle' | 'outline'
shape      'square' | 'rounded' | 'full'
colorPalette  'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink'
borderless boolean
fallbackMode  'icon' | 'initials' | 'none'
badgeImageSrc / badgeImageAlt / badgePlacement / badgeSize    for badge overlays
loading 'eager' | 'lazy'
```

### `<VideoShowcase>`
```
src         string
poster      string
aspectRatio '16-9' | '9-16' | '4-3' | '4-5' | '1-1' | '2-3' | 'auto'   // NOTE: dashes, not slashes!
size        'sm' | 'md' | 'lg' | 'xl' | 'full'
variant     'default' | 'rounded' | 'elevated'
objectFit   'contain' | 'cover' | 'fill' | 'none'
radius      'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
showPlayButton  boolean
maxHeight   string | number
frame       'none' | 'iphone-14-pro' | 'iphone-se' | 'pixel-7'
frameColor  'black' | 'white' | 'silver' | 'gold'
frameSize / mobileFrameSize / mobileMaxWidth   number
overlay     ReactNode                 // e.g. flag badge
flagCountry string                    // 'de' | '🇩🇪' | 'germany'
youtubeUrl  string
href        string
openInNewTab  boolean
onPlay / onPause   () => void
```

---

## Feedback

### `<Tag>`
```
variant   'success' | 'error' | 'warning' | 'info' | 'accent' | 'default'
size      'small' | 'medium' | 'large'     // NOTE: not sm/md/lg!
surface   'subtle' | 'muted' | 'vibrant'
icon      ReactNode
removable / interactive / disabled    boolean
showStars  boolean
rating     number
onClick / onRemove   () => void
```

### `<Stars>`
```
rating    number          // 1..5, decimals allowed (4.5)
maxStars  number
color     'accent' | 'primary' | 'success' | 'warning' | 'error'
size      'sm' | 'md' | 'lg'
```

---

## Animation

### `<CarouselAnimation>`
```
items            { id: string|number, content: ReactNode }[]   // required
speed            number     // higher = faster (px/sec, roughly)
direction        'left' | 'right'
duplicateCount   number     // how many times to repeat the items
enableFadeEdges  boolean
fadeWidth        string     // '100px'
gap              string     // CSS gap, e.g. '1rem' / '3rem'
itemWidth / itemMaxWidth / itemMinWidth / itemHeight / itemPadding   string
backgroundColor / containerHeight / padding                          string
enableHover / paused                                                 boolean
```

### `<CountUp>`
```
end              number              // required
start            number              // default 0
duration         number              // seconds
delay            number              // ms
suffix / prefix / separator   string
decimals         number
easing           'linear' | 'easeIn' | 'easeOut' | 'easeInOut' | 'expoOut'
enableScrollTrigger  boolean
triggerOffset    number
resetOnPropsChange  boolean
onComplete       () => void
// + all Typography props (variant, weight, color, align, ...)
```

### `<FadeIn>`
```
direction       'up' | 'down' | 'left' | 'right' | 'none'
duration        number          // ms
delay           number          // ms
distance        number          // px
easing          'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
enableScrollTrigger  boolean
triggerOffset   number          // px
disabled        boolean
wrapperKey      string
onComplete      () => void
```

---

## Common gotchas

| Mistake | Fix |
|---|---|
| `<Card padding="xl">` | Max is `"lg"` |
| `<VideoShowcase aspectRatio="9/16">` | Use `"9-16"` (dashes) |
| `<Image aspectRatio="9-16">` | Use `"9/16"` (slashes — opposite of VideoShowcase) |
| `<HStack spacing="2xl">` | HStack max is `"xl"`. Use Grid/Box with `gap` for bigger gaps. |
| `<GridItem order={...}>` | No `order` prop. Reorder children in JSX. |
| `<Tag size="md">` | Tag uses `"small" \| "medium" \| "large"` |
| `<Avatar shape="circle">` | Use `"full"` |
| Autocomplete dead in editor | Cmd+Shift+P → "TypeScript: Restart TS Server" |
