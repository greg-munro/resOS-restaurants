import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { SearchBar } from "../imports/ui/SearchBar"

describe("SearchBar", () => {
  it("should render", () => {
    render(<SearchBar />)

    expect(screen.getByText("Search for a restaurant")).toBeInTheDocument()
    expect(screen.getByRole("searchbox")).toBeEnabled()
    expect(screen.getByPlaceholderText("Pizza? Dessert...?")).toBeInTheDocument()
  })

  it("should submit info", async () => {
    const onSubmitMock = jest.fn()
    render(<SearchBar onSubmit={onSubmitMock} />)
    const user = userEvent.setup()
    const searchbox = screen.getByRole("searchbox")

    expect(searchbox).toHaveValue("")
    await user.type(screen.getByRole("searchbox"), "Restuarante Pizza")
    expect(searchbox).toHaveValue("Restuarante Pizza")

    expect(onSubmitMock).not.toHaveBeenCalled()
    await user.click(screen.getByRole("button",{ name: "Go"}))
    expect(onSubmitMock).toHaveBeenCalledWith("Restuarante Pizza")

  })

})