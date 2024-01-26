import { render, screen } from "@testing-library/react"
import { Greeting } from "../imports/ui/Greeting"

describe("Greeting", () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it("should render", () => {
    render(<Greeting />)

    expect(screen.getByText(/Good (Morning|Afternoon|Evening)/)).toBeInTheDocument();
  })

  it("should return good morning", () => {
    const mockDate = new Date('2024-01-26T09:00:00'); 
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);


    render(<Greeting />)
    expect(screen.getByText('Good Morning 😊')).toBeInTheDocument();
  })

  it("should return good afternoon", () => {
    const mockDate = new Date('2024-01-26T12:00:00'); 
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);


    render(<Greeting />)
    expect(screen.getByText('Good Afternoon 😊')).toBeInTheDocument();
  })

  it("should return good evening", () => {
    const mockDate = new Date('2024-01-26T17:00:00'); 
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);


    render(<Greeting />)
    expect(screen.getByText('Good Evening 😊')).toBeInTheDocument();
  })

})