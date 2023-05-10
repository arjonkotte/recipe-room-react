export default function AllRecipesPage() {
  return (
    <main>
      <table id="list">
        <thead>
          <th>Title</th>
          <th>Preparation Time</th>
        </thead>
        <tbody>
        {/* <% recipes.forEach(function(r) { %> */}
          {/* <tr>
            <td><a href="/recipes/<%=r._id%>"><%=r.title%></a></td>
            <td><%=r.prepTime%></td>
          </tr>
        <% }); %> */}
        </tbody>
      </table>
    </main>
  );
}