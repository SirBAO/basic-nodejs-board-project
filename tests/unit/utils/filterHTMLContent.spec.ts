import { filterHTMLContent } from '@/utils/index'

describe('Utils: filterHTMLContent', () => {
  it('replacing image', () => {
    expect(
      filterHTMLContent('hello ![image](https://abc.com/example.png) world')
    ).toBe('hello [img] world')
  })

  it('replacing link', () => {
    expect(filterHTMLContent('hello https://abc.com/img.png world')).toBe(
      'hello [link] world'
    )
  })

  it('replacing HTML tags', () => {
    expect(filterHTMLContent('hello <b>world</b>')).toBe('hello world')
  })

  it('replacing link, image, tag', () => {
    expect(
      filterHTMLContent(
        'hello ![image](https://abc.com/example.png) <b>world</b> https://abc.com/img.png'