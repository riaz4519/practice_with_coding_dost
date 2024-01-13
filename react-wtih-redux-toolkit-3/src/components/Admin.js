import {
  useAddAccountMutation,
  useDeleteAccountMutation,
  useGetAccountsQuery,
  useUpdateAccountMutation,
} from '../api/adminSlice'
function Admin() {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery()

  const [addAccount] = useAddAccountMutation()
  const [deleteAccount] = useDeleteAccountMutation()

  const [updateAccount] = useUpdateAccountMutation()
  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>

        {isLoading ? <p>Loading ...</p> : ''}

        {isSuccess &&
          data &&
          data.map((account) => (
            <div>
              <p key={account.id}>
                {account.id}. {account.amount} :
                <button onClick={() => deleteAccount(account.id)}>
                  Delete
                </button>{' '}
                :{' '}
                <button
                  onClick={() =>
                    updateAccount({
                      id: account.id,
                      amount: 777,
                    })
                  }
                >
                  updateAccount
                </button>
              </p>
            </div>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          AddAccount
        </button>
      </div>
    </div>
  )
}

export default Admin
