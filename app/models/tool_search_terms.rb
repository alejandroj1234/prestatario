class ToolSearchTerms
  attr_reader :where_clause, :where_args, :order
  def initialize(search_term)
    search_term = search_term.downcase
    @where_clause = ''
    @where_args = {}
    build_for_name_search(search_term)
  end
end

private
  def build_for_name_search(search_term)
    @where_clause << case_insensitive_search(:tool_name)
    @where_args[:tool_name] = starts_with(search_term)
    @where_clause << " OR #{case_insensitive_search(:tool_make)}"
    @where_args[:tool_make] = starts_with(search_term)
    @where_clause << " OR #{case_insensitive_search(:tool_model)}"
    @where_args[:tool_model] = starts_with(search_term)
    @order = "tool_name asc"
  end

  def starts_with(search_term)
    search_term + "%"
  end

  def case_insensitive_search(field_name)
    "lower(#{field_name}) like :#{field_name}"
  end

