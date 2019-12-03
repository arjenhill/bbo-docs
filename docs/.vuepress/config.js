module.exports = {
  title: 'BBO Document description',
  description: 'Just playing around',

  themeConfig: {
    sidebar: [
      {
        title: 'Usage reference',
        collapsable: false, //是否展开
      },
      ['./guide/log/log','LOG'],
      ['./guide/detecting/detecting','detecting'],
      ['./guide/arguments/arguments','arguments'],
      ['./guide/url/url','Url Params'],
      ['./guide/cookie/cookie','Cookie'],
      ['./guide/loadassets/loadAssets','load assets'],
      ['./guide/time/time','Date'],
      ['./guide/random/random','random'],
      ['./guide/touch/touch','touch'],
      ['./guide/image/image','image'],
      ['./guide/lodash/lodash','lodash'],
      ['./guide/bom/bom','bom'],
      ['./guide/array/array','array'],
      ['./guide/string/string','string'],
      ['./guide/other/other','other'],
    ]
  }
}