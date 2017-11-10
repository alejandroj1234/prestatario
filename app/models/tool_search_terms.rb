class ToolSearchTerms
  attr_reader :where_clause, :where_args, :order
  def initialize(search_term, user_id)
    user_id = user_id
    search_term = search_term.downcase
    @where_clause = ''
    @where_args = {}
    build_for_tool_search(search_term, user_id)
  end
end

private
  def build_for_tool_search(search_term, user_id)
    @where_clause << case_insensitive_search(:tool_name, user_id)
    @where_args[:tool_name] = starts_with(search_term)
    @where_clause << " OR #{case_insensitive_search(:tool_make, user_id)}"
    @where_args[:tool_make] = starts_with(search_term)
    @where_clause << " OR #{case_insensitive_search(:tool_model, user_id)}"
    @where_args[:tool_model] = starts_with(search_term)
    @order = "tool_name asc"
  end

  def starts_with(search_term)
    search_term + "%"
  end

  def case_insensitive_search(field_name, user_id)
    "lower(#{field_name}) like :#{field_name}
     AND NOT user_id=#{user_id}
     AND NOT (tool_status='Lent' OR tool_status='Pending')"
  end

